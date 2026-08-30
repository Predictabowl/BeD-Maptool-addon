[h: tokenId = arg(0)]
[h: sFrame = "Scheda"]

[h: switchToken(tokenId)]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode",tokenId,sThemePreferenze)]

[h: oStili = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/stili.json")]
[h: oStile = json.get(oStili, Stile)]

[frame5(sFrame,strformat("scrollreset=0; value=%s;", tokenId)):{
<html>
<head>
    [r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
    <link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/SchedaPG.css?cachelib=false">
    <title> [r: getName(tokenId)] - Scheda</title>
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']" data-tokenid="[r: tokenId]">
    <div class="sheet">

        <!-- ===================== HEADER ===================== -->
        <div class="sheet-header">
            <img class="portrait" src="[r: getTokenImage()]" alt="Ritratto">
            <div class="header-info">
                <div class="player-name">[r: getName(tokenId)]</div>
                <div class="style-row">
                    <span class="lbl">Stile:</span>
                    <span id="styleSelect" onchange="setStyle(this.value)">
                        [r: json.get(oStile, "name")]
                    <span>
                </div>
            </div>
        </div>

        <!-- ===================== TABS ===================== -->
        <div class="tab-bar">
            <button class="tab-btn active" data-tab="armi" onclick="showTab('armi')">Armi</button>
            <button class="tab-btn" data-tab="magia" onclick="showTab('magia')">Poteri</button>
            <button class="tab-btn" data-tab="difese" onclick="showTab('difese')">Difese</button>
            <button class="tab-btn" data-tab="generale" onclick="showTab('generale')">Generale</button>
            <button class="tab-btn" data-tab="base" onclick="showTab('base')">Base</button>
        </div>

        <!-- ===================== TAB: ARMI ===================== -->
        <div class="tab-panel active" id="tab-armi">
            <div class="weapon-toggle" id="armiToggle">
            </div>
            <div id="armiPanel">
            </div>

            <div class="section-title">Offensivo (Generale)</div>
            <div class="stat-grid cols-2">
                [h: iVA = getVA(tokenId)]
                <div class="stat-cell"><span class="k">VA</span><span class="v">[r: iVA] <small>([r: round(calcPercentMod(-iVA/100)*100,1)]%)</small></span></div>
                [h: iMancare = getMancare(tokenId)]
                <div class="stat-cell"><span class="k">Mancare</span><span class="v">[r: getMancare(tokenId)] <small>([r: round(getMancareProb(iMancare)*100,1)]%)</small></span></div>
                
            </div>
        </div>

        <!-- ===================== TAB: POTERI ===================== -->
        <div class="tab-panel" id="tab-magia">
            <div class="section-title">Scuole</div>
            <table class="poteri-table" id="poteriTable"></table>
            <div class="hint">LL e CD sono derivati (LMM + bonus generale + bonus arma) e già riportati nella descrizione di ogni incantesimo/potere/tecnica &mdash; qui solo per riferimento rapido.</div>
        </div>

        <!-- ===================== TAB: DIFESE ===================== -->
        <div class="tab-panel" id="tab-difese">
            <div class="section-title">LD (Livello Difesa)</div>
            <div class="stat-grid cols-3">
                <div class="stat-cell">
                    <span class="k">
                        <img src="lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png" alt="Taglio"> LD
                    </span>
                    <span class="v">[r: getLD(tokenId, "T")]</span>
                </div>
                <div class="stat-cell">
                    <span class="k">
                        <img src="lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png" alt="Botta"> LD
                    </span>
                    <span class="v">[r: getLD(tokenId, "B")]</span>
                </div>
                <div class="stat-cell">
                    <span class="k">
                        <img src="lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png" alt="Punta"> LD
                    </span>
                    <span class="v">[r: getLD(tokenId, "P")]</span>
                </div>
            </div>

            <div class="subsection-title">Mitigazione</div>
            <div class="stat-grid cols-3">
                <div class="stat-cell">
                    <span class="k">Schivare</span>
                    [h: iSchivare = getSchivare(tokenId)]
                    <span class="v">
                        [r: iSchivare] <small>([r: strformat("%.1f", getSchivareProb(iSchivare)*100)]%)</small>
                    </span>
                </div>
                <div class="stat-cell">
                    <span class="k">Parare</span>
                    [h: iParare = getParare(tokenId)]
                    <span class="v">
                        [r: iParare] <small>([r: strformat("%.1f", getParareProb(iParare)*100)]%)</small>
                    </span>
                </div>
                <div class="stat-cell">
                    <span class="k">Elusione</span>
                    <span class="v">[r: getElusione(tokenId)]</span>
                </div>
            </div>

            <div class="section-title">Tiri Salvezza</div>
            <div class="stat-grid">
                <div class="stat-cell">
                    <span class="k">Riflessi</span>
                    <span class="v">[r: strformat("%+d", getTSRiflessi(tokenId))]</span>
                </div>
                <div class="stat-cell">
                    <span class="k">Tempra</span>
                    <span class="v">[r: strformat("%+d", getTSTempra(tokenId))]</span>
                </div>
                <div class="stat-cell">
                    <span class="k">Volontà</span>
                    <span class="v">[r: strformat("%+d", getTSVolonta(tokenId))]</span>
                </div>
            </div>

            <div class="section-title">Resistenze</div>
            <div class="resist-grid">
                <div class="resist-cell"><span>Acqua</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Acqua"))]</span></div>
                <div class="resist-cell"><span>Aria</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Aria"))]</span></div>
                <div class="resist-cell"><span>Fuoco</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Fuoco"))]</span></div>
                <div class="resist-cell"><span>Terra</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Terra"))]</span></div>
                <div class="resist-cell"><span>Arcano</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Arcano"))]</span></div>
                <div class="resist-cell"><span>Mentale</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Mentale"))]</span></div>
                <div class="resist-cell"><span>Negativo</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Negativo"))]</span></div>
                <div class="resist-cell"><span>Positivo</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Positivo"))]</span></div>
                <div class="resist-cell"><span>Fisico</span><span class="v">[r: getResistance(json.set("", "target", tokenId, "elemento", "Fisico"))]</span></div>
            </div>
        </div>

        <!-- ===================== TAB: GENERALE ===================== -->
        <div class="tab-panel" id="tab-generale">
            <div class="section-title">Generale</div>
            <div class="kv-row">
                <span>Iniziativa</span>
                <span class="v">[r: strformat("1d24%+d",Tiro_Iniziativa)]</span>
            </div>
            <div class="kv-row">
                <span>Tempo Movimento</span>
                <span class="v" id="tempo-movimento">[r: getMoveTime(tokenId)]</span>
            </div>
            <div class="kv-row">
                <span>Concentrazione</span>
                <span class="v">[r: getConcentrazionePoteri(tokenId)]</span>
            </div>
            <div class="kv-row">
                <span>Perturbazione</span>
                <span class="v">[r: strformat("1d100%+d",getPerturbazionePoteri(tokenId))]</span>
            </div>

            <div class="section-title">Modificatori</div>
            <div class="stat-grid cols-2">
								
                <div class="stat-cell">
                    <span class="k">Danno Inflitto</span>
                    [h, macro("core/getMDIPerc@this"): tokenId]
                    <span class="v">[r: strformat("%+.1f", (calcPercentMod(macro.return)-1)*100)]%</span>
                </div>
                <div class="stat-cell">
                    <span class="k">Danno Ricevuto</span>
                    <span class="v">[r: strformat("%+.1f", (calcPercentMod(Mod_Danno_in)-1)*100)]%</span>
                </div>
                <div class="stat-cell">
                    <span class="k">Cure Generate</span>
                    [h, macro("core/getMCGPerc@this"): tokenId]
                    <span class="v">[r: strformat("%+.1f", (calcPercentMod(macro.return)-1)*100)]%</span>
                </div>
                <div class="stat-cell">
                    <span class="k">Cure Ricevute</span>
                    <span class="v">[r: strformat("%+.1f", (calcPercentMod(Mod_Cura_in)-1)*100)]%</span>
                </div>
            </div>

            <div class="section-title">Riposo Breve</div>
            <div class="kv-row">
                <span>Mana</span>
                [h, macro("mobs/getManaRiposoBreve@this"): json.append(tokenId,"useFRM")]
                <span class="v resource-fill">[r: strformat("%+d", macro.return)]</span>
            </div>
            <div class="kv-row">
                <span>PF</span>
                [h, macro("mobs/getPFRiposoBreve@this"): tokenId]
                <span class="v">[r: strformat("%+d", macro.return)]</span>
            </div>
            <div class="kv-row">
                <span>Rimanenti oggi</span>
                [h, macro("mobs/getNumRiposoBreve@this"): tokenId]
                <span class="v" id="num-riposo-breve">[r: macro.return]</span>
            </div>

            <div class="section-title">Riposo Lungo</div>
            <div class="kv-row">
                <span>PV</span>
                [h, macro("mobs/getPVRiposoLungo@this"): tokenId]
                <span class="v">[r: strformat("%+d", macro.return)]</span>
            </div>
        </div>

        <!-- ===================== TAB: BASE (CARATTERISTICHE) ===================== -->
        <div class="tab-panel" id="tab-base">
            <div class="subsection-title" style="margin-top:0;">Caratteristiche &mdash; solo riferimento</div>

            <div class="core-columns">
                <div class="core-list">
                    <div class="core-main-label">Forza</div><div class="core-main-value">[r: Forza]</div>
                    <div class="core-sub-label">Muscoli</div><div class="core-sub-value">[r: Muscoli]</div>
                    <div class="core-sub-label">Vigore</div><div class="core-sub-value">[r: Vigore]</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Destrezza</div><div class="core-main-value">[r: Destrezza]</div>
                    <div class="core-sub-label">Precisione</div><div class="core-sub-value">[r: Precisione]</div>
                    <div class="core-sub-label">Equilibrio</div><div class="core-sub-value">[r: Equilibrio]</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Costituzione</div><div class="core-main-value">[r: Costituzione]</div>
                    <div class="core-sub-label">Salute</div><div class="core-sub-value">[r: Salute]</div>
                    <div class="core-sub-label">Resistenza</div><div class="core-sub-value">[r: Resistenza]</div>
                </div>

                <div class="core-list">
                    <div class="core-main-label">Intelligenza</div><div class="core-main-value">[r: Intelligenza]</div>
                    <div class="core-sub-label">Ragione</div><div class="core-sub-value">[r: Ragione]</div>
                    <div class="core-sub-label">Conoscenza</div><div class="core-sub-value">[r: Conoscenza]</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Saggezza</div><div class="core-main-value">[r: Saggezza]</div>
                    <div class="core-sub-label">Volontà</div><div class="core-sub-value">[r: Volonta]</div>
                    <div class="core-sub-label">Intuizione</div><div class="core-sub-value">[r: Intuizione]</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Carisma</div><div class="core-main-value">[r: Carisma]</div>
                    <div class="core-sub-label">Presenza</div><div class="core-sub-value">[r: Presenza]</div>
                    <div class="core-sub-label">Risolutezza</div><div class="core-sub-value">[r: Risolutezza]</div>
                </div>
            </div>

            <div class="derived-row">
                <span class="k">Caratteristica Mana</span>
                <span class="v">[r: getCarM(tokenId)]</span>
            </div>
        </div>

    </div>
    <script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/SchedaPG.js?cachelib=false" defer></script>
</body>
</html>
}]