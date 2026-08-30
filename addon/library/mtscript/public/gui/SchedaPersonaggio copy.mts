[h: tokenId = arg(0)]
[h: sFrame = "Scheda"]

[h: switchToken(tokenId)]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode",tokenId,sThemePreferenze)]
[h: oArma1 = getArma(tokenId, 1)]
[h, macro("gui/SchedaPersWeapon@this"): json.append(tokenId, 1)]

[h: oStili = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/stili.json")]
[h: oStile = json.get(oStili, Stile)]
[h, macro("mobs/getScudo@this"): tokenId]
[h: oArma2 = macro.return]
[h, if(json.isEmpty(oArma2)), code:{
    [oArma2 = getArma(tokenId, 2)]
    [if(json.isEmpty(oArma2)): sArma2Type = "null"; sArma2Type = "weapon"]
};{
    [sArma2Type = "shield"]
}]
[frame5(sFrame,strformat("scrollreset=0; value=%s;", tokenId)):{
<html>
<head>
    [r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
    <link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/SchedaPG.css?cachelib=false">
    <title> [r: getName(tokenId)] - Descrizione Potere</title>
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
        <meta id="weapon-data" data-weapon1="[r: jsArma1]" data-weapon2="[r: jsArma2]">
        <div class="tab-panel active" id="tab-armi">
            <div class="weapon-toggle" id="armiToggle">
                [r, if(sArma2Type != "null"), code:{
                    <button class="active" id="weapon1_btn" onclick="setActiveWeapon(1)">
                        [r: json.get(oArma1, "nome")]
                    </button>
                    <button class="" id="weapon2_btn" onclick="setActiveWeapon(2)">
                        [r: json.get(oArma2, "nome")]
                    </button>
                }]
            
            </div>
            <div id="armiPanel">
                <div class="weapon-name">[r: json.get(oArma1, "nome")]</div>
                
                <div class="damage-line">
                    <span>[r: replace(string(Danno_Arma1),",","+")]</span>
                    [h, macro("gui/getDmgTypeIcons@this"): Tipo_Danno_Arma1]
                    [r, foreach(jType, macro.return, ""), code:{
                        <img src="[r: json.get(jType, 'src')]" alt="[r: json.get(jType, 'name')]">
                    }]
                </div>
                <div class="stat-grid">
                    <div class="stat-cell"><span class="k">LA</span><span class="v">[r :getLA(tokenId,1)]</span></div>
                    <div class="stat-cell"><span class="k">Penetraz.</span><span class="v">[r: getPenetrazione(tokenId,1)]</span></div>
                    [h: iCrit = getCrit(tokenId,1)]
                    <div class="stat-cell"><span class="k">Critico</span><span class="v">[r: iCrit] <small>([r: round(getCritProb(iCrit)*100,1)]%)</small></span></div>
                    <div class="stat-cell"><span class="k">P.Critico</span><span class="v">[r: getPCrit(tokenId,1)+100]%</span></div>
                    <div class="stat-cell"><span class="k">LA Spalle</span><span class="v">[r: strformat("%+d",getLASpalle(tokenId,1))]</span></div>
                    <div class="stat-cell"><span class="k">Tempo Att.</span><span class="v">[r: getAttackTime(tokenId,0,1)]</span></div>
                    <div class="stat-cell"><span class="k">Portata</span><span class="v">[r: getPortataArma(tokenId,1)]</span></div>
                    [h, macro("combat/getCostoPA@this"):json.set("","source",tokenId,"arma",1)]
                    <div class="stat-cell"><span class="k">PA Attacco</span><span class="v">[r: macro.return]</span></div>
                    [h: sCaA = json.get(oArma1, "carArma")]
                    <div class="stat-cell"><span class="k">Car. Arma</span><span class="v" style="font-size:13px;">[r, if(sCaA == "CaP"): "Mana"; sCaA]</span></div>
                </div>
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
                <div class="stat-cell"><span class="k"><img src="../../addon/library/public/icons/gui/slash_icon.png" alt="Taglio"> LD</span><span class="v">15</span></div>
                <div class="stat-cell"><span class="k"><img src="../../addon/library/public/icons/gui/crush_icon.png" alt="Botta"> LD</span><span class="v">11</span></div>
                <div class="stat-cell"><span class="k"><img src="../../addon/library/public/icons/gui/pierce_icon.png" alt="Punta"> LD</span><span class="v">13</span></div>
            </div>

            <div class="subsection-title">Mitigazione</div>
            <div class="stat-grid cols-3">
                <div class="stat-cell"><span class="k">Schivare</span><span class="v">14 <small>(32%)</small></span></div>
                <div class="stat-cell"><span class="k">Parare</span><span class="v">18 <small>(38%)</small></span></div>
                <div class="stat-cell"><span class="k">Elusione</span><span class="v">6 <small>(15%)</small></span></div>
            </div>

            <div class="section-title">Tiri Salvezza</div>
            <div class="stat-grid">
                <div class="stat-cell"><span class="k">Riflessi</span><span class="v">+4</span></div>
                <div class="stat-cell"><span class="k">Tempra</span><span class="v">+6</span></div>
                <div class="stat-cell"><span class="k">Volontà</span><span class="v">+2</span></div>
            </div>

            <div class="section-title">Resistenze</div>
            <div class="resist-grid">
                <div class="resist-cell"><span>Acqua</span><span class="v">10</span></div>
                <div class="resist-cell"><span>Aria</span><span class="v">0</span></div>
                <div class="resist-cell"><span>Fuoco</span><span class="v">-15</span></div>
                <div class="resist-cell"><span>Terra</span><span class="v">5</span></div>
                <div class="resist-cell"><span>Arcano</span><span class="v">20</span></div>
                <div class="resist-cell"><span>Mentale</span><span class="v">0</span></div>
                <div class="resist-cell"><span>Negativo</span><span class="v">-5</span></div>
                <div class="resist-cell"><span>Positivo</span><span class="v">5</span></div>
                <div class="resist-cell"><span>Fisico</span><span class="v">8</span></div>
            </div>
        </div>

        <!-- ===================== TAB: GENERALE ===================== -->
        <div class="tab-panel" id="tab-generale">
            <div class="section-title">Generale</div>
            <div class="kv-row"><span>Iniziativa</span><span class="v">1d24+29</span></div>
            <div class="kv-row"><span>Tempo Movimento</span><span class="v">3</span></div>
            <div class="kv-row"><span>Concentrazione</span><span class="v">18</span></div>
            <div class="kv-row"><span>Perturbazione</span><span class="v">1d100+6</span></div>

            <div class="section-title">Modificatori</div>
            <div class="stat-grid cols-2">
                <div class="stat-cell"><span class="k">MDI</span><span class="v">+10%</span></div>
                <div class="stat-cell"><span class="k">MDR</span><span class="v">-5%</span></div>
                <div class="stat-cell"><span class="k">MCG</span><span class="v">0%</span></div>
                <div class="stat-cell"><span class="k">MCR</span><span class="v">0%</span></div>
            </div>

            <div class="section-title">Riposo Breve</div>
            <div class="kv-row"><span>Mana</span><span class="v resource-fill">+12</span></div>
            <div class="kv-row"><span>PF</span><span class="v">+8</span></div>
            <div class="kv-row"><span>Rimanenti oggi</span><span class="v">2</span></div>

            <div class="section-title">Riposo Lungo</div>
            <div class="kv-row"><span>PV</span><span class="v">+20</span></div>
        </div>

        <!-- ===================== TAB: BASE (CARATTERISTICHE) ===================== -->
        <div class="tab-panel" id="tab-base">
            <div class="subsection-title" style="margin-top:0;">Caratteristiche &mdash; solo riferimento</div>

            <div class="core-columns">
                <div class="core-list">
                    <div class="core-main-label">Forza</div><div class="core-main-value">8</div>
                    <div class="core-sub-label">Muscoli</div><div class="core-sub-value">9</div>
                    <div class="core-sub-label">Vigore</div><div class="core-sub-value">7</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Destrezza</div><div class="core-main-value">10</div>
                    <div class="core-sub-label">Precisione</div><div class="core-sub-value">11</div>
                    <div class="core-sub-label">Equilibrio</div><div class="core-sub-value">9</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Costituzione</div><div class="core-main-value">9</div>
                    <div class="core-sub-label">Salute</div><div class="core-sub-value">9</div>
                    <div class="core-sub-label">Resistenza</div><div class="core-sub-value">9</div>
                </div>

                <div class="core-list">
                    <div class="core-main-label">Intelligenza</div><div class="core-main-value">6</div>
                    <div class="core-sub-label">Ragione</div><div class="core-sub-value">6</div>
                    <div class="core-sub-label">Conoscenza</div><div class="core-sub-value">6</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Saggezza</div><div class="core-main-value">7</div>
                    <div class="core-sub-label">Volontà</div><div class="core-sub-value">8</div>
                    <div class="core-sub-label">Intuizione</div><div class="core-sub-value">6</div>
                    <div class="core-divider"></div>

                    <div class="core-main-label">Carisma</div><div class="core-main-value">5</div>
                    <div class="core-sub-label">Presenza</div><div class="core-sub-value">5</div>
                    <div class="core-sub-label">Risolutezza</div><div class="core-sub-value">5</div>
                </div>
            </div>

            <div class="derived-row">
                <span class="k">Car. Mana</span>
                <span class="v">Intelligenza (6)</span>
            </div>
        </div>

    </div>
    <script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/SchedaPG.js?cachelib=false" defer></script>
</body>
</html>
}]