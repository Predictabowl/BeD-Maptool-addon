[h: oToken = json.get(macro.args,"token")]
[h: spellName = json.get(macro.args,"libSpell")]
[h: oOggetto = json.get(macro.args,"consumabile")]
<!-- TODO serve se lo uso solo per le spells? -->
[h, if(!json.isEmpty(oOggetto)), code:{
	[macro("consumables/setForceItemCastOverride@this"): oToken]
	[macro("consumables/haveSogliaPotere@this"): json.append(oToken,spellName)]
	[bSoglia = macro.return]
	[bConsumabile = 1]
	[macro("consumables/getSogliaPotereRate@this"): json.append(oToken,oOggetto)]
	[iSogliaRate = macro.return]
};{
	[h: bConsumabile = 0]
	[h: bSoglia = 0]	
}]

[h: sDialog = "DescrizioneIncantesimo"]
[h: sTags = upper(fetchSpellProp(spellName,"tags"))]
[h: lTratti = ""]
[h, if(listContains(sTags, "AGGRESSIONE")): lTratti = listAppend(lTratti, "Aggressione")]
[h, if(listContains(sTags, "ARMATURA")): lTratti = listAppend(lTratti, "Armatura")]
[h, if(listContains(sTags, "CONTROLLATO")): lTratti = listAppend(lTratti, "Controllato")]
[h, if(listContains(sTags, "RISOLUTO")): lTratti = listAppend(lTratti, "Risoluto")]
[h, if(listContains(sTags, "SANGUINAMENTO")): lTratti = listAppend(lTratti, "Sanguinamento")]
[h, if(listContains(sTags, "VELENO")): lTratti = listAppend(lTratti, "Veleno")]

[h, macro("gui/delSpellStatFromCache@this"):json.append(oToken,spellName)]
[h, macro("gui/CompileSpellCardValues@this"):json.append(oToken,spellName)]
[h: oSpellData = macro.return]

[h: bLightMode = getPreferenza("light_mode",oToken, sDialog)]

[dialog5(sDialog,"width= 650; height=700; temporary=0; closebutton=0"):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellDetailsCssLink.html")]
	<title> [r: getName(oToken)] - Descrizione Potere</title>
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']">

   <dialog id="spell-detail-dialog" class="spell-dialog" open>

        <button class="theme-switch-btn" type="button" onclick="toggleTheme('[r: oToken]', '[r: sDialog]')"
            aria-label="Cambia tema" title="Cambia tema">&#9789;</button>

        <!-- Intestazione: sigillo (colorato in base al Tipo), titolo, chip Tipo + Tratti -->
        <div class="dialog-header">
            <div class="seal-ring">
                <img src="[r: fetchSpellImage(spellName)]" alt="Icona incantesimo">
            </div>
            <div class="header-text">
                <h2 class="spell-title">[r: fetchSpellProp(spellName,"nome_decorativo")]</h2>
                <div class="chip-row">
					[h: sTipo = fetchSpellProp(spellName,"tipo")]
                    <span class="chip type-chip [r: upper(sTipo)]">[r: sTipo]</span>
					[r, foreach(sTratto, lTratti, ""), code:{
                    	<span class="chip trait-chip">[r: sTratto]</span>
					} ]
                </div>
            </div>
        </div>

        <!-- Fascia risorse -->
        <div class="resource-ribbon">
            <div class="resource-item">
				[h: manaMant = json.get(oSpellData,"ManaMant")]
        		[h, if(manaMant>0): manaMant="†"+manaMant; manaMant=""]
                <span class="stat-label">Mana</span>
                <span class="stat-value manaFont">[r: json.get(oSpellData, "mana")][r: manaMant]</span>
            </div>
            <div class="resource-item">
				[h: pfMant = json.get(oSpellData,"PFMant")]
        		[h, if(pfMant>0): pfMant="†"+pfMant; pfMant=""]
                <span class="stat-label">PF</span>
                <span class="stat-value faticaFont">[r: json.get(oSpellData, "PF")][r: pfMant]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">Tempo</span>
                <span class="stat-value tempoFont">[r: json.get(oSpellData, "tempo")]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">PA</span>
                <span class="stat-value azioneFont">[r: json.get(oSpellData, "PA")]</span>
            </div>
            <div class="resource-item">
				[h: ppMant = json.get(oSpellData,"PPMant")]
        		[h, if(ppMant>0): ppMant="†"+ppMant; ppMant=""]
                <span class="stat-label">PP</span>
                <span class="stat-value ppFont">[r: json.get(oSpellData, "PP")][r: ppMant]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">MM</span>
                <span class="stat-value mmFont">[r: json.get(oSpellData, "MM")]</span>
            </div>
        </div>

        <div class="spell-body">

            <p class="section-eyebrow">Dettagli</p>
            <div class="ornate-divider"></div>

            <!-- Dettagli in stile indice/compendio -->
            <div class="compendium-list">
                <div class="compendium-row">
                    <span class="label">Scuola</span><span class="leader"></span>
                    <span class="value">[r: getScuola(oToken,spellName)]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Tipo</span><span class="leader"></span>
                    <span class="value">[r: sTipo]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Elemento</span><span class="leader"></span>
                    <span class="value">[r: fetchSpellProp(spellName,"elemento")]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Durata</span><span class="leader"></span>
                    <span class="value">[r: getSpellDurata(oToken,spellName)]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Raggio</span><span class="leader"></span>
                    <span class="value">[r: getSpellRange(oToken,spellName)]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Area</span><span class="leader"></span>
                    <span class="value">[r: strformat("%d %s",getSpellAoE(oToken,spellName),getAoEShape(spellName,oToken))]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">TS</span><span class="leader"></span>
                    <span class="value">[r: fetchSpellProp(spellName,"TS")]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Componenti</span><span class="leader"></span>
                    <span class="value">[r: fetchSpellProp(spellName,"componenti")]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Recupero</span><span class="leader"></span>
					[h: iRecupero = fetchSpellProp(spellName,"recupero")]
                    <span class="value">[r, if(isNumber(iRecupero)): iRecupero; 0]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Opportunità</span><span class="leader"></span>
					[h, macro("powers/generaOpportunita@this"): json.append(oToken,spellName)]
                    <span class="value">[r, if(macro.return): "Sì"; "No"]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Medium</span><span class="leader"></span>
                    <span class="value">[r: fetchSpellProp(spellName,"proiettile")]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Tratti</span><span class="leader"></span>
                    <span class="value">[r: lTratti]</span>
                </div>
            </div>

            <!-- Descrizione -->
			[h: aFlavour = fetchSpellProp(spellName,"flavour")]
			<div class='[r, if(json.isEmpty(aFlavour)): "flavor-empty"; "flavor"]'>
			[r, foreach(sDescr, aFlavour, ""), code:{
				<p>[r: sDescr]</p>
			}]
			</div>
            <div class="mechanical">
			[r, if(bSoglia): strformat("<p style='font-style: italic; margin-bottom: 5px;'>Soglia di Potere: %{iSogliaRate}%</p>")]
			[h: aDescrizione = fetchSpellProp(spellName,"descrizione")]
			[r, foreach(sDescr, aDescrizione, ""), code:{
				[h, macro("utility/textProcessHTML@this"): sDescr]
                <p>[r: macro.return]</p>
			}]
            </div>

        </div>

    </dialog>

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellCommonScripts.js?cachelib=false" defer></script>
</body>
</html>
}]

<!-- TODO questo non servirà? I consumabili avranno un dialog separato -->
[macro("consumables/setForceItemCastOverride@this"): json.append(oToken,0)]
