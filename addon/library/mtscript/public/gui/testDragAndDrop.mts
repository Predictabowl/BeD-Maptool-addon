[h: oToken = arg(0)]
[h: sDialog = "DialogCambioArmi"]

[h: sGruppoPreferenze = "Dialog_Cambio_Armi"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 350]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 350]

[h: switchToken(oToken)]

[dialog5(sDialog, strformat("temporary=0; width=%{iLarg}; height=%{iAltezza}; closebutton=0")):{
<html>
<script>
	[r:"
	function allowDrop(ev){
		ev.preventDefault();
	}

	function drag(ev){
		ev.dataTransfer.setData('text',ev.target.id);
	}

	function dragEnter(ev){
		ev.preventDefault();
		ev.stopPropagation();
		ev.target.classList.add('test-drag');
		document.getElementById('testOutput').innerHTML = ev.target.id;
	}

	function dragLeave(ev){
		ev.preventDefault();
		ev.stopPropagation();
		ev.target.classList.remove('test-drag');
		document.getElementById('testOutput').innerHTML = ev.target.id;
	}
	
	function drop(ev){
		ev.preventDefault();
		var data = ev.dataTransfer.getData('text');
		var element = document.getElementById(data);
		var iOrder = element.getAttribute('data-order');
		var parent;
		if (ev.target.nodeName == 'DIV'){
			parent = ev.target;
		} else{
			parent = ev.target.parentElement;
		}
		var i = 0;
		var testo = '';
		var items = Array.from(parent.children);
		for (let k in items){
			testo += items[k].id+' | ';
			if (items[k].id > element.id){
				break;
			}
			i++;
		}
		document.getElementById('testOutput').innerHTML = testo+ '; valore di i: '+i;
		parent.insertBefore(element, parent.children[i]);
		ev.target.classList.remove('test-drag');
	}

	window.addEventListener('DOMContentLoaded', () => {
	    const element = document.getElementById('div1');
	    element.addEventListener('dragend', allowDrop);
	  });
	
	"]
</script>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title> Abilità di Classe</title> 
</head>
<body align="center">
	<h2> [r: getName(oToken)] </h2>
	<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type="hidden" name="libAbilita" value ="" id="input_lib_abilita" />
	<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>

	<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" class="grid-container" style="float:left;"></div>
	<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" class="grid-container" style="float:left; cursor:move;">
		<img id="drag1" data-order="1" src="[r:getImage('Lib:PalladiFuoco')]" width="64" height="64" draggable="true" ondragstart="drag(event)">
		<img id="drag2" data-order="2" src="[r:getImage('Lib:Incenerire')]" width="64" height="64" draggable="true" ondragstart="drag(event)">
		<img id="drag3" data-order="3" src="[r:getImage('Lib:FulmineGlobulare')]" width="64" height="64" draggable="true" ondragstart="drag(event)">
	</div>

	<div id="testOutput"></div>
</body>
</html>
}]

[h: oProperties = getDialogProperties(sDialog)]
[h: setPreferenza("larghezza",json.get(oProperties,"width"),oToken,sGruppoPreferenze)]
[h: setPreferenza("altezza",json.get(oProperties,"height"),oToken,sGruppoPreferenze)]
