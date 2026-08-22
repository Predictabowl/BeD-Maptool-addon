[h: oToken = json.get(macro.args,"token")]
[h: slotId = json.get(macro.args,"slotId")]


[h: oScroll = getFromSlotVeloce(oToken, slotId)]
[h: spellName = json.get(oScroll, "libName")]
[h: iLivello = json.get(oScroll, "livello")]

[h, macro("consumables/getTipoConsumabile@this"): json.append(spellName, 1)]
[h: sTipoConsumable = macro.return]

[h: sDialog = "DescrizioneIncantesimo"]
[h, macro("gui/getVisibleSpellTraits@this"): spellName]
[h: lTratti = macro.return]

[h: bLightMode = getPreferenza("light_mode",oToken, sDialog)]

[dialog5(sDialog,"width= 650; height=700; temporary=0; closebutton=0"):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellDetailsCssLink.html")]
	<title> [r: getName(oToken)] - Descrizione Pergamena</title>
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
                <span class="stat-label">LL</span>
                [h, macro("consumables/getLLOggetto@this"): iLivello]
                <span class="stat-value genericStatFont">[r: macro.return]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">CD</span>
                [h, macro("consumables/getCDOggetto@this"): iLivello]
                <span class="stat-value genericStatFont">[r: macro.return]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">Tempo</span>
                [h: spellParams = json.set("","source",oToken,"spellName",spellName,"critRes",0)] 
                <span class="stat-value tempoFont">[r: getSpellTime(spellParams)]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">PA</span>
                <span class="stat-value azioneFont">[r: getSpellPAzione(oToken, spellName, 0)]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">PP</span>
                <span class="stat-value ppFont">[r: getSpellPP(oToken, spellName, 0)]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">MM</span>
                <span class="stat-value mmFont">[r: getSpellMM(oToken, spellName, 0)]</span>
            </div>
        </div>

        <div class="spell-body">

            <p class="section-eyebrow">Dettagli</p>
            <div class="ornate-divider"></div>

            <!-- Dettagli in stile indice/compendio -->
            <div class="compendium-list">
                [r, if(sTipoConsumable != "POZIONE"), code:{
                    <div class="compendium-row">
                        <span class="label">Scuola</span><span class="leader"></span>
                        <span class="value">[r: getScuola(oToken,spellName)]</span>
                    </div>
                }]
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
                [r, if(sTipoConsumable != "POZIONE"), code:{
                    <div class="compendium-row">
                        <span class="label">Componenti</span><span class="leader"></span>
                        <span class="value">[r: fetchSpellProp(spellName,"componenti")]</span>
                    </div>
                <div class="compendium-row">
                    <span class="label">Recupero</span><span class="leader"></span>
					[h: iRecupero = fetchSpellProp(spellName,"recupero")]
                    <span class="value">[r, if(isNumber(iRecupero)): iRecupero; 0]</span>
                </div>
                }]
                <div class="compendium-row">
                    <span class="label">Opportunità</span><span class="leader"></span>
					[h, macro("powers/generaOpportunita@this"): json.append(oToken,spellName)]
                    <span class="value">[r, if(macro.return): "Sì"; "No"]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Medium</span><span class="leader"></span>
                    <span class="value">[r: fetchSpellProp(spellName,"proiettile")]</span>
                </div>
                [r, if(sTipoConsumable != "POZIONE"), code:{
                    <div class="compendium-row">
                        <span class="label">Tratti</span><span class="leader"></span>
                        <span class="value">[r: lTratti]</span>
                    </div>
                }]
            </div>

            <!-- Descrizione -->
			[h: aFlavour = fetchSpellProp(spellName,"flavour")]
            [h, if(aFlavour == "null"): aFlavour = ""]
			<div class='[r, if(json.isEmpty(aFlavour)): "flavor-empty"; "flavor"]'>
			[r, foreach(sDescr, aFlavour, ""), code:{
				<p>[r: sDescr]</p>
			}]
			</div>
            <div class="mechanical">
			[h: aDescrizione = fetchSpellProp(spellName,"descrizione")]
			[r, foreach(sDescr, aDescrizione, ""), code:{
				[h, macro("utility/textProcessHTML@this"): sDescr]
                <p>[r: macro.return]</p>
			}]
            </div>

        </div>

    </dialog>

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellCommonScripts.js?cachelib=true" defer></script>
</body>
</html>
}]

<!-- TODO questo non servirà? I consumabili avranno un dialog separato -->
[macro("consumables/setForceItemCastOverride@this"): json.append(oToken,0)]
