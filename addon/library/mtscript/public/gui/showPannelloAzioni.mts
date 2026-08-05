[h: oToken = arg(0)]
[h: sDialog = "DialogPannelloAzioni"]

[h: switchToken(oToken)]

[h, if(isMovTattico(oToken)): sMovButtonClass = "activeButton"; sMovButtonClass = ""]
[h, if(getState("Atterrato",oToken)): sAtterratoStyle = "display:block"; sAtterratoStyle= "display:none"]
[h, if(getPreferenza("BottoneCiclaVista",oToken,"Overlay") == 1): sVistaButtonClass = "activeButton"; sVistaButtonClass = ""]

[dialog5(sDialog, strformat("temporary=1; width=400; height=300; closebutton=0; noframe=0;")):{
<html>

<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title>Azioni</title> 
	<script>
	[r:"
		function pressButton(value){
			document.getElementById('action-performed').setAttribute('value',value);
			document.getElementById('main-form').submit();
		}
	
	"]
	</script>
</head>
<body align="center">
	<div class="relevantTitle"> [r: getName(oToken)] </div>
	<div style="display:grid; grid-template-columns: auto auto auto; place-content:start space-evenly; grid-gap:5px; margin-left:5px; margin-right:5px;">
		<button type="button" onclick="pressButton('toggleMovTattico')" class="[r: sMovButtonClass]" title="Se abilitato non provochi opportunità, ma non puoi uscire dall'area di minaccia.">Movimento Tattico</button>
		<button type="button" onclick="pressButton('alzarsi')" style="[r: sAtterratoStyle]">Alzarsi</button>
		<button type="button" onclick="pressButton('nascondersi')" >Nascondersi</button>
		<button type="button" onclick="pressButton('toggleVistaPersonale')" class="[r: sVistaButtonClass]">Vista Personale</button>
		<button type="button" onclick="pressButton('listaEffettiPersonali')" >Effetti Attivi</button>		
		<button type="button" onclick="pressButton('openDiarioCampagna')" >Diario Campagna</button>
		<button type="button" onclick="pressButton('trasferisciEquip')" >Trasferisci Equip.</button>
	</div>
	<form id="main-form" method="json" action="[r:macroLinkText("gui/eseguiAzione@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<input type="hidden" id="action-performed" name="action-performed" value="">
		<input type="hidden" name="token" value="[r: oToken]">
	</form>
</body>
</html>
}]
