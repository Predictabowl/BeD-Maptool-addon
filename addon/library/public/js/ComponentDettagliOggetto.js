const NUM_FORMATTER = new Intl.NumberFormat('it-IT', { signDisplay: 'always' });
let displayItem = {};


async function fillDettagliOggetto(jsonId) {
    const jsonString = document.getElementById(jsonId).dataset.oggettojson;
    await buildDisplayItem(jsonString);
    // const displayItem = JSON.parse(document.getElementById(jsonId).dataset.oggettojson);
    document.getElementById("cdo-item-name").textContent = displayItem.nome;
    const iconEl = document.getElementById("cdo-item-icon");
    iconEl.setAttribute("alt", displayItem.nome);
    iconEl.setAttribute("src", displayItem.icona);
    renderItemTags();
    renderWeaponBlock();
    renderWeaponAttributes();
    renderGeneralAttributes();
    renderRunes();
    // getDmgTypeIcon();
}

function renderItemTags() {
    document.getElementById("cdo-item-tags").innerHTML = `<span class="item-tag">
            ${displayItem.categoria}
        </span>${displayItem.tipoArma ? '<span class="item-tag">' + displayItem.tipoArma + '</span>' : ''}
        ${displayItem.carArma ? '<span class="item-tag">'
            + (displayItem.carArma.toUpperCase() === 'CAP'? 'mana' : displayItem.carArma)
            + '</span>' : ''}`;
}

function renderWeaponBlock() {
    const weaponBlock = document.getElementById("cdo-item-weapon-block");
    if(['arma', 'armatura', 'scudo'].includes(displayItem.categoria)) {
        weaponBlock.classList.remove("hidden");
        renderWeaponDmg();
        renderWeaponSubStats();
    } else {
        weaponBlock.classList.add("hidden");
    }
}

function renderWeaponDmg() {
    const element1 = document.getElementById("cdo-item-1h-dmg");
    const element2 = document.getElementById("cdo-item-2h-dmg");
    if(displayItem.categoria == 'arma') {
        const dmgTypes = displayItem.tipoDanno.map(d => `<img src="${getDmgTypeIcon(d)}" alt="${d}">`).join('');
        if(displayItem.danno1H != 0) {
            element1.classList.remove("hidden");
            element1.innerHTML = `
                <span class="hand-label">1 Mano</span>
                <span class="dmg-value">${displayItem.danno1H}</span>
                ${dmgTypes}`;
            } else {
            element1.classList.add("hidden");
        }
        if(displayItem.danno2H != 0) {
            element2.classList.remove("hidden");
            element2.innerHTML = `
                <span class="hand-label">2 Mani</span>
                <span class="dmg-value">${displayItem.danno2H}</span>
                ${dmgTypes}`;
            } else {
            element2.classList.add("hidden");
        }
    } else {
        element1.classList.add("hidden");
        element2.classList.add("hidden");
    }
}

function renderWeaponSubStats() {
    const element = document.getElementById("cdo-item-w-substats");
    switch(displayItem.categoria) {
        case 'arma':
            // element.classList.add("cols-3");
            // <div class="substat-cell"><span CLASS="k">Car. Arma</span><span class="v" id="cdo-item-car-arma">${displayItem.carArma}</span></div>
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Portata</span><span class="v" id="cdo-item-portata">${displayItem.portata}</span></div>
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${displayItem.ingombro}</span></div>`;
            break;
        case 'armatura':
            // element.classList.remove("cols-3");
            console.log();
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Addestramento</span><span class="v" id="cdo-item-portata">${displayItem.addArmatura}</span></div>
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${displayItem.ingombro}</span></div>`;
            break;
        case 'scudo':
            // element.classList.remove("cols-3");
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${displayItem.ingombro}</span></div>`;
    }
}

function renderWeaponAttributes() {
    const element = document.getElementById("cdo-item-weapon-attr");
    if(Object.keys(displayItem.attributiArma).length > 0) {
        element.classList.remove("hidden");
        element.children[1].innerHTML = Object.entries(displayItem.attributiArma).map(([key,value]) =>
            `<div class="attr-chip"><span class="attr-k">${key}</span><span class="attr-v">${value}</span></div>`).join('');
        
    } else {
        element.classList.add("hidden");
    }
}

function renderGeneralAttributes() {
    const element = document.getElementById("cdo-item-general-attr");
    if(Object.keys(displayItem.attributi).length > 0) {
        element.classList.remove("hidden");
        element.children[1].innerHTML = Object.entries(displayItem.attributi).map(([key,value]) =>
            `<div class="attr-chip passive"><span class="attr-k">${key}</span><span class="attr-v">${value}</span></div>`).join('');
        
    } else {
        element.classList.add("hidden");
    }
}

function renderRunes(){
    const element = document.getElementById("cdo-item-runes");
    if(displayItem.datiCustom?.RuneInstallate?.length > 0) {
        element.classList.remove("hidden");
        element.innerHTML = displayItem.datiCustom.RuneInstallate.map((r,index) => `
            <div class="rune-row">
                <img class="rune-icon" src="${r.iconAsset}" alt="${r.nomeDecorativo}">
                <div class="rune-info">
                    <a href="#" class="rune-spell-link" onclick="apriDialogDescrizioneRuna(event, ${index})">${r.nomeDecorativo}</a>
                    <div class="rune-meta">
                        <span>Livello ${r.livello}</span>
                        <span>Cariche ${r.cariche}${r.maxCariche? '/'+r.maxCariche : ''}</span>
                    </div>
                </div>
            </div>`).join('');
    } else {
        element.classList.add("hidden");
    }
}

async function buildDisplayItem(jsonString){
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/buildDisplayDataFromItem', { method: 'POST', body: jsonString })
    displayItem = await response.json();
}

// [h: sNome = json.get(oOggetto, "nome")]
// [h: sDialog = "DialogInfoOggetto-"+sNome]
// [h: jAttributi = json.get(oOggetto, "attributi")]
// [h: jAttributiArma = json.get(oOggetto, "attributiArma")]
// [h: jDatiCustom = json.get(oOggetto, "datiCustom")]
// [h, if(json.contains(jDatiCustom, "RuneInstallate")): aRune = json.get(jDatiCustom, "RuneInstallate"); aRune = "[]"]

function checkAutofillOggetto() {
    if(document.getElementById("auto-fill-oggetto"))
        fillDettagliOggetto("auto-fill-oggetto");
}

checkAutofillOggetto();


async function apriDialogDescrizioneRuna(event, runaIndex) {
    event.stopPropagation();
    const runa = displayItem.datiCustom.RuneInstallate[runaIndex];
    const bodyStr = JSON.stringify({ item: runa});
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogConsumableDetails', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}