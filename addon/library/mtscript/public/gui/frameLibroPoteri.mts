[h: oToken = findToken(arg(0))]
[h, if(oToken == ""): oToken = getImpersonated()]


[h: oListaPot = getLibroPoteri(oToken)]
[h: oMemList = getPoteriMem(oToken)]
[h: iMemCount = 0]

[h: sGruppoPreferenze = "Dialog_Libro_Poteri"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 1000]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 720]
[h: lSize = setStrProp("","width",iLarg)]
[h: lSize = setStrProp(lSize,"height",iAltezza)]

[h: sGruppoPreferenze = "Dialog_Grimorio_Poteri"]
[h: bLightMode = getPreferenza("light_mode",oToken,sGruppoPreferenze)]

[dialog5("memorizzaPoteri",strformat("temporary=1; %{lSize}; closebutton=0;")):{
<html>	
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
	<title>[r: getName(oToken)] - Grimorio Incantesimi</title>
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']">
	<form id="form-memorizza" class="grimoire-dialog" method="json" action="[r:macroLinkText("gui/formMemPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<div class="grimoire-grid-container">
		[r, foreach(spellId, oListaPot, ""), code:{
			[h, if(json.contains(oMemList,spellId)): memorized = 1; memorized = 0]
			[h: iMemCount = iMemCount + memorized]
			<div class='spell-card [r, if(!memorized): "in-book"; ""]' onclick="toggleCardCheckbox(event)">
				<input id="memorizzati-input" type="hidden" name="[r: spellId]" value='[r: memorized]'>
				[r, macro("gui/CompileSpellStatGrid@this"): json.append(oToken, spellId)]
            </div>
		}]
		</div>

		<div class="grimoire-footer">
            <div class="grimoire-actions">
				<input type="submit" name="Conferma" value="Conferma" class="btn btn-confirm">
				<input type="submit" name="Annulla" value="Annulla" class="btn btn-cancel">
            </div>

            <div class="grimoire-counter">
				[h: iMaxMem = getProperty("Inc_Memorizzabili",oToken)]
				Memorizzati: <span id="mem-num" data-max="[r: iMaxMem]" class='[r,if(iMemCount > iMaxMem): "over-limit"; ""]'>[r: iMemCount]</span>/[r: iMaxMem]
            </div>
        </div>

		<input type="hidden" name="token" value="[r: oToken]">
	</form>

	<button class="theme-switch-btn" style="right:25px;" id="themeToggle" title="Cambia Tema" onclick="toggleTheme('[r: oToken]', '[r: sGruppoPreferenze]')">
		🌓
	</button>


	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/LibroIncantesimi.js?cachelib=true" defer></script>
	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellCommonScripts.js?cachelib=true" defer></script>
</body>
</html>
}]
