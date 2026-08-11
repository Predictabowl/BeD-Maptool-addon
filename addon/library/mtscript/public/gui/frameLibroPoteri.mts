[h: oToken = findToken(arg(0))]
[h, if(oToken == ""): oToken = getImpersonated()]


[h: oListaPot = getLibroPoteri(oToken)]
[h: oMemList = getPoteriMem(oToken)]
[h: iMemCount = 0]

[h: aIncData = "[]"]
[h, foreach(oInc, oListaPot), code:{
	[oIncData = "{}"]
	[sJScriptSpell = strformat('apri_dialog_descrizione(event, "%{oInc}")')]
	[sNameInc = fetchSpellProp(oInc,"nome_decorativo")]
	[sSpellType = fetchSpellProp(oInc,"tipo")]
	[if(json.contains(oMemList,oInc)), code:{
		[iMemCount = iMemCount +1]
		[oIncData = json.set(oIncData, "memorized", 1, "cssMemClass", "memorized")]
	}]
	[oIncData = json.set(oIncData, "id", oInc, "jscript", sJScriptSpell, "nome", sNameInc, "tipo", sSpellType)]
	[aIncData = json.append(aIncData, oIncData)]
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
	<title>Grimorio Incantesimi ([r: getName(oToken)])</title>
</head>
<body>
	<form id="form-memorizza" method="json" action="[r:macroLinkText("gui/formMemPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<div class="grimoire-grid-container">
		[r, foreach(oInc, aIncData, ""), code:{
			[h: spellId = json.get(oInc, "id")]
			[h, macro("gui/CompileSpellCardValues@this"):json.append(oToken,spellId)]
			[h: oSpellData = macro.return]
			<div class='grimoire-card [r: json.get(oInc, "cssMemClass")]' onclick="toggleCardCheckbox(event)">
				<input id="memorizzati-input" type="hidden" name="[r: spellId]" value='[r: json.get(oInc, "memorized")]'/>
                <div class='spell-name-badge [r: json.get(oInc, "tipo")]' onclick='[r: json.get(oInc, "jscript")]'>
					[r: json.get(oInc, "nome")]
				</div>

				<div class="spell-stats-grid">
					<div class="stat-box">
						<span class="stat-label">M:</span>
						[h: manaMant = json.get(oSpellData,"ManaMant")]
						[h, if(manaMant>0): manaMant="†"+manaMant; manaMant=""]
						[r: strformat("<span class='stat-value manaFont'>%s%{manaMant}</span>", json.get(oSpellData, "mana"))]
					</div>
					<div class="stat-box">
						[h: pfMant = json.get(oSpellData,"PFMant")]
						[h, if(pfMant>0): pfMant="†"+pfMant; pfMant=""]
						<span class="stat-label">PF:</span>
						<span class="stat-value faticaFont">[r: json.get(oSpellData, "PF")][r: pfMant]</span>
					</div>
					<div class="stat-box">
						<span class="stat-label">TE:</span>
						<span class="stat-value tempoFont">[r: json.get(oSpellData, "tempo")]</span>
					</div>
					<div class="stat-box">
						<span class="stat-label">PA:</span>
						<span class="stat-value azioneFont">[r: json.get(oSpellData, "PA")]</span>
					</div>
					<div class="stat-box">
						<span class="stat-label">PP:</span>
						[h: ppMant = json.get(oSpellData,"PPMant")]
						[h, if(ppMant>0): ppMant="†"+ppMant; ppMant=""]
						<span class="stat-value ppFont">[r: json.get(oSpellData, "PP")][r: ppMant]</span>
					</div>
					<div class="stat-box">
						<span class="stat-label">MM:</span>
						<span class="stat-value mmFont">[r: json.get(oSpellData, "MM")]</span>
					</div>
				</div>
            </div>
		}]
		</div>

		<div class="grimoire-footer">
            <div class="grimoire-actions">
				<input type="submit" name="Conferma" value="Conferma" class="btn btn-confirm"/>
				<input type="submit" name="Annulla" value="Annulla" class="btn btn-cancel"/>
            </div>

            <div class="grimoire-counter">
				[h: iMaxMem = getProperty("Inc_Memorizzabili",oToken)]
				Memorizzati: <span id="mem-num" data-max="[r: iMaxMem]" class='[r,if(iMemCount > iMaxMem): "over-limit"; ""]'>[r: iMemCount]</span>/[r: iMaxMem]
            </div>
        </div>

		<input type="hidden" name="token" value="[r: oToken]"/>
	</form>
	<div style="text-align:center">
	</div>

	<!-- Form Nascosto per descrizione spell -->
	<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneSpell@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type="hidden" name="libSpell" value ="" id="input_lib_spell" />
	<input type="hidden" name="token" value ="[r:oToken]"/>
	</form>

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/LibroIncantesimi.js?cachelib=false" defer></script>
</body>
</html>
}]
