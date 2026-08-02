[h: oToken = arg(0)]
[h: sDialog = "DialogPannelloSpiriti"]

[h: switchToken(oToken)]

[h: jSpiriti = getArraySpiriti(oToken)]

[h: htmlSpiritList = ""]
[h, macro("powers/getMaxDevozione@this"): oToken]
[h: iMaxDevozione = macro.return]
[h: iBarraWidth = 250]
[h, foreach(sSpirito, jSpiriti), code:{
	[iDevozione = getModDevozione(oToken, sSpirito)]
	[iBarraFill = floor((iDevozione*iBarraWidth)/iMaxDevozione)]
	[iChance = min(round((iDevozione)*100/6 ,1), 100)]
	
	[htmlSpiritList = strformat("%{htmlSpiritList}
		<div>%{sSpirito}</div>
		<div>
			<div style='width:%{iBarraWidth}px; background-color: navy;'>
				<div style='width:%{iBarraFill}px; background-color: cyan;'>%{iDevozione}/%{iMaxDevozione}</div>
			</div>
		</div>	
		<div>%{iChance}%</div>
	")]
}]

[dialog5(sDialog, strformat("temporary=1; width=500; height=850; closebutton=0; noframe=0;")):{
<html>

<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css?cachelib=true">
	<title>Spiriti</title> 
</head>
<body align="center">
	<div class="relevantTitle"> [r: getName(oToken)] </div>
	<div style='display: grid; grid-template-columns: auto auto auto; justify-content: center; margin-top: 15px; gap: 5px;'>
		[r: htmlSpiritList]
	</div>
	<div>
		Richiamo: 1d6 + Mod. (CD 7)
	</div>
	<div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
		[h: lSpiriti = json.toList(getArraySpiriti(oToken))]
		[r, foreach(sSpirito, lSpiriti, ""), code:{
			<div>
				<h3>[r: sSpirito]</h3>
				[h, macro("gui/spiritiPowersTable@this"): json.append(oToken, sSpirito)]
				[r: macro.return]
			</div>
		}]
	</div>
	<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneSpell@this")]">
		<input type="hidden" name="libSpell" value ="" id="input_lib_spell" />
		<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>
	<script>
	[r:"
		function apri_dialog_descrizione(sLibName){
			document.getElementById('input_lib_spell').setAttribute('value',sLibName);
			document.getElementById('dialogDescrizioneForm').submit();
		}
	"]
	</script>
</body>
</html>
}]
