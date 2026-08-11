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
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
	<title>Grimorio Incantesimi</title>
</head>
<body>
	<h2>Grimorio degli Incantesimi</h2>

	<form id="form-memorizza" method="json" action="[r:macroLinkText("gui/formMemPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">

		<div class="grimoire-grid-container">
		[r, foreach(oInc, oListaPot, ""), code:{
			[h: sJScriptSpell = strformat('apri_dialog_descrizione("%{oInc}")')]
			[h: sNameInc = fetchSpellProp(oInc,"nome_decorativo")]
			[h: sSpellType = fetchSpellProp(oInc,"tipo")]
			[h, if(json.contains(oMemList,oInc)), code:{
				[sMem = "checked"]
				[iMemCount = iMemCount +1]
				[cssMemClass = "memorized"]
			};{
				[sMem = ""]
				[cssMemClass = ""]
			}]

			<div class="grimoire-card [r: cssMemClass]" onclick="toggleCardCheckbox(this)">
                <input type="checkbox" name="memorizzati" [r: sMem] class="grimoire-checkbox"
                    onclick="event.stopPropagation(); toggleCheckboxDirect(this)" value="[r: oInc]">

                <div class="spell-name-badge [r: sSpellType]">[r: sNameInc]</div>

                <div class="spell-stats-grid">
                    <div class="stat-box">
                        <span class="stat-label">M:</span>
                        <span class="stat-value manaFont">5</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-label">PF:</span>
                        <span class="stat-value faticaFont">1</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-label">TE:</span>
                        <span class="stat-value tempoFont">1</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-label">PA:</span>
                        <span class="stat-value azioneFont">2</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-label">PP:</span>
                        <span class="stat-value ppFont">1</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-label">MM:</span>
                        <span class="stat-value mmFont">0</span>
                    </div>
                </div>
            </div>
			[h: iIndex = iIndex+1]
		}]

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

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/libroIncantesimi.js?cachelib=false" defer></script>
</body>
</html>
}]
