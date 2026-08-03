[h: oToken = arg(0)]
[h: sDialog = "DialogCambioArmi"]

[h: sGruppoPreferenze = "Dialog_Cambio_Armi"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 350]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 400]

[h: switchToken(oToken)]

[macro("mobs/getArmatura@this"): oToken]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconArmatura = macro.return]

[h: iconAnello1 = ""]
[h: iconAnello2 = ""]
[h: iconAmuleto = ""]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"anello")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconAnello1 = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"anello",2)]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconAnello2 = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"amuleto")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconAmuleto = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"bracciali")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconBracciali = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"mantello")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconMantello = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"cintura")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconCintura = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"stivali")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconStivali = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"guanti")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconGuanti = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"elmo")]
[macro("gui/makeHtmlOggetto@this"): macro.return]
[h: iconElmo= macro.return]

[h: oArma = getArma(oToken,1)]
[macro("gui/makeHtmlOggetto@this"): oArma]
[h: iconArma = macro.return]


[h: iconArma2 = ""]
[h: bgArma2 = ""]
[macro("combat/isStile2A@this"): oToken]
[h: b2Armi = macro.return]
[h, if(b2Armi), code:{
	[h: bgArma2 = "ArmaBG.png"]
	[h: oArma2 = getArma(oToken,2)]
	[macro("gui/makeHtmlOggetto@this"): oArma2]
	[h: iconArma2 = macro.return]
	
}]

[macro("combat/isStileAS@this"): oToken]
[h: bScudo = macro.return]
[h, if(bScudo), code:{
	[h: bgArma2 = "ScudoBG.png"]
	[macro("mobs/getScudo@this"): oToken]
	[h: oArma2 = macro.return]
	[macro("gui/makeHtmlOggetto@this"): oArma2]
	[h: iconArma2 = macro.return]
	
}]


[dialog5(sDialog, strformat("temporary=0; width=%{iLarg}; height=%{iAltezza}; closebutton=0")):{
<html>

<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css">
	<title> Abilità di Classe</title> 
	<script>
	[r:"
		let dragged;
		

		function hoverInfo(ev){
			var data = JSON.parse(ev.target.getAttribute('data-oggetto'));
			document.getElementById('nomeOggetto').innerHTML = data.nome;
			var lista = document.getElementById('listaAttributi');
			while (lista.firstChild){
				lista.removeChild(lista.firstChild);
			}
			var item;
			for(var key in data.attributi){
				item = document.createElement('li');
				item.appendChild(document.createTextNode(key.replace('_',' ')+': '+data.attributi[key]));
				lista.appendChild(item);
			}

			var armaDOM = document.getElementById('datiArma');
			if(ev.target.getAttribute('data-categoria') == 'arma'){
				armaDOM.innerHTML = 'Danno 1 mano: '+data.danno1H+'<br>Danno 2 mani: '+data.danno2H;
			} else {
				armaDOM.innerHTML = '';
			}

			if (typeof(data.descrizione) != 'undefined'){
				document.getElementById('descrizioneOggetto').innerHTML = data.descrizione;
			} else {
				document.getElementById('descrizioneOggetto').innerHTML = '';
			}
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
				if(target.firstChild && target.getAttribute('data-categoria') != 'inventario'){
					parent.appendChild(target.firstChild);
				}
				target.appendChild(dragged);
			}
			target.classList.remove('drag-paperdoll-item');
			target.classList.remove('nodrag-paperdoll-item');
		}

		function isDropAllowed(source,target){
			var targetCat = target.getAttribute('data-categoria');
			var sourceCat = source.getAttribute('data-categoria');
			var dataNode = document.getElementById('dataNode');
			var b2Armi = dataNode.getAttribute('data-dueArmi');
			var bScudo = dataNode.getAttribute('data-scudo');
			if (targetCat == 'scudo' && bScudo == 0 && b2Armi == 0){			
				return false;
			}
			if (targetCat == 'scudo' && sourceCat == 'scudo' && bScudo == 0){			
				return false;
			}
			if (targetCat == 'scudo' && sourceCat == 'arma' && b2Armi == 1){			
				return true;
			}
			if (targetCat != 'scudo' && targetCat != 'arma' && targetCat != 'armatura' &&targetCat != 'inventario' && countAccessoriEquipped() >= 5){
				return false;
			}
			if (targetCat == sourceCat || targetCat == 'inventario'){
				return true;
			}
			return false;
		}

		function countAccessoriEquipped(){
			var iNum = 0;
			let arrayAcc = ['slotAmuleto','slotAnello1','slotAnello2','slotBracciali','slotMantello','slotCintura','slotStivali','slotGuanti','slotElmo'];
			var item;
			for(var key in arrayAcc){
				item = document.getElementById(arrayAcc[key]);
				if(item.firstChild){
					iNum = iNum+1;
				}
			}
			return iNum;
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
			document.getElementById('equip-form').submit();
		}

		function setInputSlot(slotName,inputName){
			var item = document.getElementById(slotName);
			var value;
			if(item.firstChild){
				value = item.firstChild.getAttribute('data-oggettoid');
			} else {
				value = 'rimuovi'
			}
			document.getElementById(inputName).setAttribute('value',value);
		}
	"]
	</script>
</head>
<body align="center">
	<h2> [r: getName(oToken)] </h2>
	<div style="display:grid; grid-template-columns: auto auto; justify-content_center; grid-gap:10px;">
		<div style="background-image: url('[r: getTokenHandout(400,oToken)]'); width:300px; height:400px; background-repeat:no-repeat; background-position:center;">
			<div class="paperdoll-container">
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotElmo",iconElmo,"ElmoBG.png","elmo")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotAmuleto",iconAmuleto,"AmuletoBG.png","amuleto")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotArmatura",iconArmatura,"ArmaturaBG.png","armatura")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotMantello",iconMantello,"MantelloBG.png","mantello")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotGuanti",iconGuanti,"GuantiBG.png","guanti")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotBracciali",iconBracciali,"BraccialiBG.png","bracciali")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotArma1",iconArma,"ArmaBG.png","arma")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotArma2",iconArma2,bgArma2,"scudo")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotCintura",iconCintura,"CinturaBG.png","cintura")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotAnello1",iconAnello1,"AnelloBG.png","anello")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotStivali",iconStivali,"StivaliBG.png","stivali")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotAnello2",iconAnello2,"AnelloBG.png","anello")]
			</div>
			
		</div>
		<div id="listaOggetti" style="width:max-content; height:398px;">
			<div style="margin-bottom:5px;">Equipaggiamento</div>
			<div style="background-color:#5c4b3d">
				<div class="inventory-container" data-categoria="inventario" ondrop='drop(event)' ondragover='allowDrop(event)' ondragenter='dragEnter(event)' ondragleave='dragLeave(event)' style="width:276px; height:360px;">
					[r, macro("gui/makeHtmlInventario@this"): oToken]
				</div>
			</div>
		</div>
		<div id="box-descrizione-oggetto" class="itemInfo" style="width:300px; height:200px; border:1px solid black; font-size:14px; overflow-y:scroll;">
			<h2 id="nomeOggetto" style="font-size:17px; margin:2px; text-align:center; color:orangered;">Mario</h2>
			<div id="datiArma" style="margin-left:10px; margin-right:10px;"></div>
			<ul id="listaAttributi" style="color:blue;">
			</ul>
			<p id="descrizioneOggetto"></p>
		</div>
	</div>
	<form id="equip-form" method="json" action="[r:macroLinkText("gui/eseguiEquipaggiamento@this")]">
		<input type="hidden" id="input-armatura" name="input-armatura" value="">
		<input type="hidden" id="input-amuleto" name="input-amuleto" value="">
		<input type="hidden" id="input-anello1" name="input-anello1" value="">
		<input type="hidden" id="input-anello2" name="input-anello2" value="">
		<input type="hidden" id="input-arma1" name="input-arma1" value="">
		<input type="hidden" id="input-arma2" name="input-arma2" value="">
		<input type="hidden" id="input-bracciali" name="input-bracciali" value="">
		<input type="hidden" id="input-mantello" name="input-mantello" value="">
		<input type="hidden" id="input-cintura" name="input-cintura" value="">
		<input type="hidden" id="input-stivali" name="input-stivali" value="">
		<input type="hidden" id="input-guanti" name="input-guanti" value="">
		<input type="hidden" id="input-elmo" name="input-elmo" value="">
		<input type="hidden" name="token" value="[r: oToken]">		
		<input type="button" onclick="setInputValues()" name ="bottonw" value="Conferma">
	</form>
	<p id="dataNode" data-dueArmi="[r:b2Armi]" data-scudo="[r:bScudo]"></p>

</body>
</html>
}]

[h: oProperties = getDialogProperties(sDialog)]
[h: setPreferenza("larghezza",json.get(oProperties,"width"),oToken,sGruppoPreferenze)]
[h: setPreferenza("altezza",json.get(oProperties,"height"),oToken,sGruppoPreferenze)]
