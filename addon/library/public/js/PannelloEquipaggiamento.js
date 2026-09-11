function setCombat(isCombat) {
    if(isCombat === 1) {
        document.getElementById('inventoryZone').classList.add('combat-locked');
    } else {
        document.getElementById('inventoryZone').classList.remove('combat-locked');
    }
}

const dragged = { element: null, type: null, container: null, data: null};
const stili = JSON.parse(document.getElementById("equip-main-panel").dataset.stili);

function handleDragOver(e) {
    e.preventDefault();
    const target = buildTarget(e.currentTarget);
    if(!isDropAllowed(target)){
        target.container.classList.add('invalid');
        setTimeout(() => target.container.classList.remove('invalid'), 450);
    }
}


function isDropAllowed(target){
    if(target.container.classList.contains("locked"))
        return false;
    const allowedCategories = new Set(target.container.dataset.allowed.split(",").map(item => item.trim()));
    if(!allowedCategories.has(dragged.data.categoria) && !allowedCategories.has("all"))
        return false;
    if(dragged.data.categoria === "arma"){
        if(isOnly2Handed(dragged) && target.type === "arma2-slot")
            return false;    
        if(dragged.data.tipoArma === "Lancio" && target.type === "arma1-slot")
            return false;
        if(!canEquipWeapon1(target))
            return false;
    }
    return true;
}

function isOnly2Handed(target){
    return  target?.data?.danno1H === 0;
}

function canEquipWeapon1(target){
    if(target.type !== "arma1-slot" || !isOnly2Handed(dragged))
        return true;
    const arma2Slot = buildTarget(document.getElementById("slot-arma2"));
    return !arma2Slot.element;
}

function initDrag(element) {
	dragged.element = element;
    dragged.container = element.closest('[data-slottype]:not([data-slottype=""])');
    dragged.type = dragged.container.dataset.slottype;
    dragged.data = JSON.parse(element.dataset.jsonoggetto);
    dragged.element.classList.add('dragging');
}

function handleDragEnd(e) {
    if (dragged.element) {
        dragged.element.classList.remove('dragging');
    }
    dragged.element = null;
}

function buildTarget(element) {
    const imgEl = element.querySelector('img');
    return {
        container: element,
        type: element.dataset.slottype,
        element: imgEl,
        data: imgEl ? JSON.parse(imgEl.dataset.jsonoggetto) : null
    };
}

function finishDrop(ev){
	ev.preventDefault();
    const target = buildTarget(ev.currentTarget);
    if(!isDropAllowed(target)){
        // eventually handle it
        return;
    }
    if(target.type === dragged.type)
        // eventually handle it
        return;


    moveAwayTargetItem(target);
    moveDraggedToNewPosition(target);
    updateLockWeapon2();
    updateStile();

	// const targetType = getTargetType(target);

	// if (isDropAllowed(dragged,target)){			
	// 	var parent = dragged.parentElement;
	// 	var targetCar = target.getAttribute('data-categoria');
	// 	var replaced = null;
	// 	if(target.firstElementChild && targetCar != 'inventario' && targetCar != 'slotRapido'){
	// 		replaced = parent.appendChild(target.firstElementChild);
	// 	}
	// 	// updateCarico(parent.getAttribute('data-categoria'), targetCar, dragged, replaced);
	// 	// updateMaxCarico(parent.getAttribute('data-categoria'), targetCar, dragged, replaced);
	// 	target.appendChild(dragged);
	// }
	// target.classList.remove('drag-paperdoll-item');
	// target.classList.remove('nodrag-paperdoll-item');
}

//Return the exact place where to append the item given its target
function buildDropContainer(target) {
    if(target.type === "inventory-slot") {
        const nis = document.createElement("div");
        nis.classList.add("inv-item");
        target.container.appendChild(nis);
        return nis;
    }
    if(target.type === "quick-slot") {
        const nis = document.createElement("div");
        nis.classList.add('equip-slot', 'small');
        target.container.appendChild(nis);
        return nis;
    }
    return target.container;
}

// Move away an item from the target container if it's in the way of the dragged items
function moveAwayTargetItem(target) {
    if(target.type === "inventory-slot" || target.type === "quick-slot")        
        return;
    if(target.element) {
        const newContainer = buildDropContainer(dragged);
        newContainer.appendChild(target.element);
        updateIngombro(target, dragged);
    }
}

// move the dragged item into its final position
function moveDraggedToNewPosition(target){
    const newContainer = buildDropContainer(target);
    if(dragged.type === "inventory-slot" || dragged.type === "quick-slot") {
        const oldParent = dragged.element.parentElement;
        newContainer.appendChild(dragged.element);
        oldParent.remove();
    } else {
        newContainer.appendChild(dragged.element);
    }
    updateIngombro(dragged, target);
}

function updateLockWeapon2() {
    const arma1 = buildTarget(document.getElementById('slot-arma1'));
    const secondary = document.getElementById('slot-arma2');
    if (isOnly2Handed(arma1)) {
        secondary.classList.add('locked');
        // primaryIcon.src = 'https://placehold.co/64x64/2a241f/d49a40?text=2M';
    } else {
        secondary.classList.remove('locked');
        // primaryIcon.src = 'https://placehold.co/64x64/2a241f/d49a40?text=1M';
        // styleValue.textContent = 'Arma e Scudo';
    }
}

async function updateStile() {
    const toCheck = ["arma", "scudo"];
    if(toCheck.includes(dragged.data.categoria)){
        const w1 = document.getElementById('slot-arma1').querySelector("img");
        const w2 = document.getElementById('slot-arma2').querySelector("img");
        const bodyStr = JSON.stringify({
            weapon1: w1? w1.dataset.jsonoggetto : '{}',
            weapon2: w2? w2.dataset.jsonoggetto : '{}'
        });
        let response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/combat/inferStile', { method: 'POST', body: bodyStr });
        const stileId = await response.text();
        const stileEl = document.getElementById('styleValue');
        stileEl.textContent = stileId == -1 ? "errore di stile!!" : stili[stileId].name;
        stileEl.dataset.text_popup = stileId == -1 ? "errore di stile!!" : JSON.stringify(stili[stileId].description);
        closeHeadlessPopup();
    }
}

function updateIngombro(moved, target) {
    if(moved.type === target.type) //this should be superfluousn but is for safety
        return;
    if(moved.type !== "inventory-slot" && target.type !== "inventory-slot")
        return;
    const mult = target.type === "inventory-slot" ? -1 : 1;
    const ingCorrente = document.getElementById("carico-corrente");
    const caricoMax = Number.parseInt(document.getElementById("carico-max").textContent);
    const newIng = Number.parseInt(ingCorrente.textContent) + (mult * (moved.data.ingombro ?? 0));
    ingCorrente.classList.toggle("over-limit", newIng > caricoMax);
    ingCorrente.textContent = newIng; 
}


// ================ DESCRIPTION DOCK =======================

function openItemDock(element) {
    setAndRenderDisplayItem(JSON.parse(element.dataset.jsonoggetto));
    const dock = document.getElementById('descrizione-dock');
    dock.classList.remove("description-closed");
    document.getElementById('dockToolbar').classList.add('active');
    dock.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'width') {
            dock.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
            dock.removeEventListener('transitionend', handler);
        }
    });
}

function closeItemDock() {
    //document.getElementById('itemDock').innerHTML = '<div class="dock-empty">Seleziona un oggetto per vederne i dettagli</div>';
    document.getElementById('descrizione-dock').classList.add("description-closed");
    document.getElementById('dockToolbar').classList.remove('active');
}


function showSlotTooltip(slotEl) {
    const oItem = JSON.parse(slotEl.dataset.jsonoggetto);
    const name = oItem.nome;
    if (!name) return;

    const tooltip = document.getElementById('slotTooltip');
    const panel = document.querySelector('.equip-panel');
    tooltip.textContent = name;
    tooltip.classList.add('visible');

    const panelRect = panel.getBoundingClientRect();
    const slotRect = slotEl.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();

    let top = slotRect.top - panelRect.top - tipRect.height - 10;
    let placedBelow = false;
    if (top < 0) {
        top = slotRect.bottom - panelRect.top + 10;
        placedBelow = true;
    }

    let left = slotRect.left - panelRect.left + (slotRect.width / 2) - (tipRect.width / 2);
    left = Math.max(4, Math.min(left, panelRect.width - tipRect.width - 4));

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    tooltip.classList.toggle('tooltip-bottom', placedBelow);
}

function hideSlotTooltip() {
    document.getElementById('slotTooltip').classList.remove('visible');
}

//====================== FORM CAMBIO ARMA =================================
function submitAllSlots(){
	setInputSlot('slot-armatura','input-armatura');
	setInputSlot('slot-amuleto','input-amuleto');
	setInputSlot('slot-anello1','input-anello1');
	setInputSlot('slot-anello2','input-anello2');
	setInputSlot('slot-arma1','input-arma1');
	setInputSlot('slot-arma2','input-arma2');
	setInputSlot('slot-bracciali','input-bracciali');
	setInputSlot('slot-mantello','input-mantello');
	setInputSlot('slot-cintura','input-cintura');
	setInputSlot('slot-stivali','input-stivali');
	setInputSlot('slot-guanti','input-guanti');
	setInputSlot('slot-elmo','input-elmo');
	setInputSlotRapidi();
	document.getElementById('equip-form').submit();
}

function setInputSlot(slotName,inputName){
	const item = document.getElementById(slotName).querySelector("img");
	let value;
	if(item){
		value = JSON.parse(item.dataset.jsonoggetto).localId;
	} else {
		value = 'rimuovi'
	}
	document.getElementById(inputName).setAttribute('value',value);
}

function setInputSlotRapidi(){
	const quickWeapons = document.getElementById('slot-rapidi').querySelectorAll('img');
    const arrayParam = [...quickWeapons].map( img => JSON.parse(img.dataset.jsonoggetto).localId);
	document.getElementById('input-slotRapidi').setAttribute('value',arrayParam);
}