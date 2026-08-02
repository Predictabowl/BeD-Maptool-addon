let dragged;


function hoverInfo(ev){
	const el = document.getElementById('tooltipBox');
	var rect = ev.target.getBoundingClientRect();
	el.innerHTML = ev.target.id;
	el.classList.remove('hiddenBox');
	el.classList.add('tooltipBox');
	const targetW = el.offsetWidth;
	var xOffset = Math.min(640 -rect.left - targetW, 0) -5;
	el.style.top = rect.top -20;
	el.style.left = rect.left + xOffset;
}

function removeInfo(ev){
	const el = document.getElementById('tooltipBox');
	el.classList.remove('tooltipBox');
	el.classList.add('hiddenBox');
}

function populateAttributeList(listName, items) {
	var lista = document.getElementById(listName);
	while (lista.firstElementChild){
		lista.removeChild(lista.firstElementChild);
	}
	var item;
	var attributePair;
	for(var key in items){
		item = document.createElement('li');
		attributePair = attributeProcess(key, items[key]);
		item.appendChild(document.createTextNode(attributePair[0]+': '+ attributePair[1]));
		lista.appendChild(item);
	}
}

function buildArmaDmgEl(dmg, icons, elId){
	var armaDom = document.getElementById(elId);
	armaDom.innerHTML = '';
	var spanEl = document.createElement('span');
	spanEl.innerHTML = dmg;
	armaDom.appendChild(spanEl);
	for (var i = 0; i < icons.length; i++){
		var dmgIcon = document.createElement('img');
		dmgIcon.src = icons[i];
		dmgIcon.width = 16;
		dmgIcon.height = 16;
		dmgIcon.style.marginLeft = '3px';
		armaDom.appendChild(dmgIcon);
	}
}

function clickInfo(ev){	
	var data = JSON.parse(ev.target.getAttribute('data-oggetto'));
	document.getElementById('nomeOggetto').innerHTML = data.nome;
	
	populateAttributeList('listaAttributi', data.attributi);

	var armaDOM = document.getElementById('datiArma');
	var sCategoria = ev.target.getAttribute('data-categoria');
	if(sCategoria == 'arma' || sCategoria == 'armaDistanza' || sCategoria == 'armaLancio'){
		armaDOM.style.display = 'block';
		var dueMani = document.getElementById('dataNode').getAttribute('data-dueMani');
		const dmgTypes = JSON.parse(ev.target.getAttribute('data-dmgTypes'));
		buildArmaDmgEl(data.danno1H, dmgTypes, 'descrDanno');
		buildArmaDmgEl(data.danno2H, dmgTypes, 'descrDanno2M');
		document.getElementById('portataWId').innerHTML = data.portata;
		populateAttributeList('listaAttributiArma', data.attributiArma);
	} else {
		armaDOM.style.display = 'none';
	}

	var ingombro = ev.target.getAttribute('data-ingombro');
	if(ingombro != 0){
		document.getElementById('descrIngombro').innerHTML = 'Ingombro: '+ingombro;
	} else {
		document.getElementById('descrIngombro').innerHTML = '';
	}

	var addestramento = ev.target.getAttribute('data-addestramento');
	var eAddestramento = document.getElementById('descrAddestramento');
	if(addestramento != 0){
		eAddestramento.style.display = 'block';
		eAddestramento.innerHTML = 'Addestramento: '+addestramento;
	} else {
		eAddestramento.style.display = 'none';
		eAddestramento.innerHTML = '';
	}

	var CaA = ev.target.getAttribute('data-CaA');
	if (typeof(CaA) != 'undefined'){
		document.getElementById('descrCaA').innerHTML = CaA;
	} else {
		document.getElementById('descrCaA').innerHTML = '';
	}

	if (typeof(data.descrizione) != 'undefined'){
		document.getElementById('descrizioneOggetto').innerHTML = data.descrizione;
	} else {
		document.getElementById('descrizioneOggetto').innerHTML = '';
	}

	var dataRune = JSON.parse(ev.target.getAttribute('data-rune'));
	var runeList = document.getElementById('listaRune');
	var numRune = dataRune.length;
	runeList.innerHTML = '';
	if(numRune > 0){
		runeList.style.display = 'grid';
		for (var i = 0; i < dataRune.length; i++){
			var runeImg = document.createElement('img');
			runeImg.src = dataRune[i][0];
			runeImg.width = 25;
			runeImg.height = 25;
			runeImg.setAttribute('title',dataRune[i][1]);
			runeList.appendChild(runeImg);
		}
	} else {
		runeList.style.display = 'none';
	}
	document.getElementById('linkItemInputId').value = ev.target.getAttribute('data-oggettoid');
}

function allowDrop(ev){
	ev.preventDefault();
	ev.stopPropagation();
	var target = getTargetForDrop(ev);
	if (isDropAllowed(dragged,target)){
		target.classList.add('drag-paperdoll-item');
	} else {
		target.classList.add('nodrag-paperdoll-item');
	}
}

function drag(ev){
	dragged = ev.target;
}

function dragLeave(ev){
	ev.preventDefault();
	ev.stopPropagation();
	var target = getTargetForDrop(ev);
	target.classList.remove('drag-paperdoll-item');
	target.classList.remove('nodrag-paperdoll-item');
}

function drop(ev){
	ev.preventDefault();
	var target = getTargetForDrop(ev);
	if (isDropAllowed(dragged,target)){			
		var parent = dragged.parentElement;
		var targetCar = target.getAttribute('data-categoria');
		var replaced = null;
		if(target.firstElementChild && targetCar != 'inventario' && targetCar != 'slotRapido'){
			replaced = parent.appendChild(target.firstElementChild);
		}
		updateCarico(parent.getAttribute('data-categoria'), targetCar, dragged, replaced);
		updateMaxCarico(parent.getAttribute('data-categoria'), targetCar, dragged, replaced);
		target.appendChild(dragged);
	}
	target.classList.remove('drag-paperdoll-item');
	target.classList.remove('nodrag-paperdoll-item');
}

function modAddestramento(item, replaced, molt) {
	const addOggetto = item.getAttribute('data-addestramento');
	const addMax = document.getElementById('dataNode').getAttribute('data-addestramento');	
	var prevMod = 0;
	if(replaced != null) {
		prevMod = Math.min(addMax - replaced.getAttribute('data-addestramento'), 0);
	}
	const newMod = (Math.min(addMax - addOggetto, 0) - prevMod) * molt * 2;
	return newMod;
}

function updateCarico(sourceCat, targetCat, item, replaced){
	var ingombro = item.getAttribute('data-ingombro');
	if (ingombro == 0 || sourceCat == targetCat){
		return false;
	}
	var value = 0;
	var molt = 0;
	if (targetCat == 'inventario'){
		molt = -1;

	} else {
		if (sourceCat != 'inventario'){
			return false;
		}
		molt = 1;
		if (replaced != null){
			ingombro = ingombro - replaced.getAttribute('data-ingombro');
		}
	}

	var elCC = document.getElementById('carico-corrente');
	var value = parseInt(elCC.innerHTML);
	value = value +(molt*ingombro) + modAddestramento(item, replaced, -molt);
	elCC.innerHTML = value;
	return true;
}

function updateMaxCarico(sourceCat, targetCat, item, replaced){
	if(targetCat == sourceCat){
		return false;
	}

	if(targetCat == 'inventario' && sourceCat == 'slotRapido'){
		return false;
	}
	if(sourceCat == 'inventario' && targetCat == 'slotRapido'){
		return false;
	}

	var molt = 1;
	if (targetCat == 'inventario' || targetCat == 'slotRapido'){
		molt = -1;
	}
	var elCarMax = document.getElementById('carico-max');
	var carMax = parseInt(elCarMax.innerHTML);
	var itemData = JSON.parse(item.getAttribute('data-oggetto'));
	var modCarMax = 0;
	if(itemData.attributi.hasOwnProperty('Mod_Carico')){
		modCarMax = modCarMax + itemData.attributi['Mod_Carico'];
	}

	if (replaced != null){
		var replacedData = JSON.parse(replaced.getAttribute('data-oggetto'));
		if(replacedData.attributi.hasOwnProperty('Mod_Carico')){
			modCarMax = modCarMax - replacedData.attributi['Mod_Carico'];
		}
	}
	elCarMax.innerHTML = carMax + molt*modCarMax;
}

function isDropAllowed(source,target){
	var targetCat = target.getAttribute('data-categoria');
	var sourceCat = source.getAttribute('data-categoria');

	if(sourceCat == 'arma' && targetCat == sourceCat) {
		return isArmaAllowed(source);
	}

	if (targetCat == sourceCat || targetCat == 'inventario'){
		return true;
	}

	if(targetCat == 'slotRapido' && (sourceCat == 'arma' 
			|| sourceCat == 'scudo'
			|| sourceCat == 'armaLancio'
			|| sourceCat == 'armaDistanza')){
		return true;
	}
	return false;
}

function isArmaAllowed(item) {
	const sStile = document.getElementById('currentStyleId').getAttribute('data-stile');
	if(sStile == 'Arma e scudo' || sStile == 'Arma e mano libera' || sStile == 'Due armi'){
		return isArma1H(item);
	}
	return true;
}

function isArma1H(item) {
	const data = JSON.parse(item.getAttribute('data-oggetto'));
	return (data.hasOwnProperty('danno1H') && data.danno1H != 0);
}

function getTargetForDrop(event){
	if (event.target.nodeName == 'DIV'){
		return event.target;
	} else{
		return event.target.parentElement;
	}
}

function setInputValues(){
	setInputSlot('slotArmatura','input-armatura');
	setInputSlot('slotAmuleto','input-amuleto');
	setInputSlot('slotAnello1','input-anello1');
	setInputSlot('slotAnello2','input-anello2');
	setInputSlot('slotArma1','input-arma1');
	setInputSlot('slotArma2','input-arma2');
	setInputSlot('slotBracciali','input-bracciali');
	setInputSlot('slotMantello','input-mantello');
	setInputSlot('slotCintura','input-cintura');
	setInputSlot('slotStivali','input-stivali');
	setInputSlot('slotGuanti','input-guanti');
	setInputSlot('slotElmo','input-elmo');
	setInputSlotRapidi();
	document.getElementById('equip-form').submit();
}

function setInputSlot(slotName,inputName){
	var item = document.getElementById(slotName);
	var value;
	if(item.firstElementChild){
		value = item.firstElementChild.getAttribute('data-oggettoid');
	} else {
		value = 'rimuovi'
	}
	document.getElementById(inputName).setAttribute('value',value);
}

function setInputSlotRapidi(){
	var children = document.getElementById('slotRapidi').children;
	var arr = [];
	for (var i = 0; i< children.length; i++){
		var data = children[i].getAttribute('data-oggettoid');
		arr[i] = data;
	}
	arr = JSON.stringify(arr);
	document.getElementById('input-slotRapidi').setAttribute('value',arr);
}


function attributeProcess(name, value){
	if(!Number.isInteger(value)){
		value = value *100;
	}
	if(value > 0){
		value = '+'+value;
	}
	
	return [name, value];
}

function toggle_show_list() {
    var eDisplay = document.getElementById('dropdown-list');
    if (eDisplay.style.display == 'none'){
        eDisplay.style.display = 'block';
    }
    else{
        eDisplay.style.display = 'none';
	}
}

function jsFormSubmit(formId) {
	document.getElementById(formId).submit();
}