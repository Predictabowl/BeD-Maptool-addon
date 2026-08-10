[h: oToken = findToken(arg(0))]
[h, if(oToken == ""): oToken = getImpersonated()]


[h: oListaPot = getLibroPoteri(oToken)]
[h: oMemList = getPoteriMem(oToken)]
[h: iMemCount = 0]
[h: sTableBody = ""]
[h: iIndex = 0]
[h, foreach(oInc, oListaPot), code:{
	[sJScriptSpell = strformat('apri_dialog_descrizione("%{oInc}")')]
	[sNameInc = fetchSpellProp(oInc,"nome_decorativo")]
	[sSpellType = fetchSpellProp(oInc,"tipo")]
	[if(json.contains(oMemList,oInc)), code:{
		[sMem = "checked"]
		[iMemCount = iMemCount +1]
	};{
		[sMem = ""]
	}]
	[sRow = strformat("<div class='v-grid-row'>
		<span class='spellFont %{sSpellType}' title='Leggi descrizione' onclick='%{sJScriptSpell}'>%{sNameInc}</span>
		<span><input type='checkbox' id='checkbox-%{iIndex}' name='%{oInc}' onclick='clickBox(%{iIndex})' %{sMem}></span>
		</div>")]
	[sTableBody = strformat("%{sTableBody}%{sRow}")]
	[iIndex = iIndex+1]
}]


[h: sGruppoPreferenze = "Dialog_Libro_Poteri"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 1000]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 720]
[h: lSize = setStrProp("","width",iLarg)]
[h: lSize = setStrProp(lSize,"height",iAltezza)]

[dialog5("memorizzaPoteri",strformat("temporary=1; %{lSize}; closebutton=0;")):{
<html>	
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title>Libro Poteri</title>
</head>
<body>
	<form id="form-memorizza" method="json" action="[r:macroLinkText("gui/formMemPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<div class="vertical-grid">
			[r: sTableBody]
		</div>
		<input type="hidden" name="token" value="[r: oToken]"/>
		<input type="submit" name="Conferma" value="Conferma" style="margin:5px"/>
		<input type="submit" name="Annulla" value="Annulla" style="margin:5px"/>
	</form>
	<div style="text-align:center">
		Memorizzati: <span id="mem-num">[r: iMemCount]</span>/[r: getProperty("Inc_Memorizzabili",oToken)]
	</div>

	<!-- Form Nascosto per descrizione spell -->
	<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneSpell@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type="hidden" name="libSpell" value ="" id="input_lib_spell" />
	<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>

	<script>
		[r:"
			function clickBox(iNum){
				var box = document.getElementById('checkbox-'+iNum);
				var domCount = document.getElementById('mem-num');
				var iValue = parseInt(domCount.innerHTML);
				if (box.checked){
					iValue++;
				} else {
					iValue--;
				}
				domCount.innerHTML = iValue;
			}

			function apri_dialog_descrizione(sLibName){
				document.getElementById('input_lib_spell').setAttribute('value',sLibName);
				document.getElementById('dialogDescrizioneForm').submit();
			}
		"]
	</script>
</body>
</html>
}]
