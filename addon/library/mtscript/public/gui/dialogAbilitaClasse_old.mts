<!-- DEPRECATED -->
[h: oToken = arg(0)]
[h: sDialog = "DialogAbilita"]


[h: sGruppoPreferenze = "Dialog_Abilita_Classe"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 350]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 350]

[h: switchToken(oToken)]
[h: lSize = setStrProp("","width",iLarg)]
[h: lSize = setStrProp(lSize,"height",iAltezza)]
[dialog5(sDialog, strformat("temporary=1; size=%{lSize}; closebutton=0; noframe=0; value=%{oToken}")):{
<html>
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title> Abilità di Classe</title> 
</head>
<body align="center">
	<div class="relevantTitle"> [r: getName(oToken)] </div>
	<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type="hidden" name="libAbilita" value ="" id="input_lib_abilita" />
	<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>
	<form id="formAttivaAbilita" method="json" action="[r:macroLinkText("gui/executeAttivaAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<input type="hidden" id="var-input" name="comando" value =""/>
		<input type="hidden" id="idAbilitaAttivata" name="libAbilita" value =""/>		
		<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>
	[macro("gui/makeTabellaAbilita@this"): oToken]
	[r: macro.return]
	[macro("gui/makeTabellaAbEroiche@this"): oToken]
	[r: macro.return]
	
	<script>
		[r:"
		function apri_dialog_descrizione(sLibName){
			document.getElementById('input_lib_abilita').setAttribute('value',sLibName);
			document.getElementById('dialogDescrizioneForm').submit();
		}

        function pulsanteAttivaAbilita(event, libName){
    		var elem = document.getElementById('var-input');
        	if(event.button == 2){
        		elem.setAttribute('value','Autocast');
        	} else {
        		elem.setAttribute('value','Attiva');
        	}
        	document.getElementById('idAbilitaAttivata').setAttribute('value', libName);
        	document.getElementById('formAttivaAbilita').submit();
        }
		"]
	</script>
</body>
</html>
}]
