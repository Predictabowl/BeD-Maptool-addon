[h: tokenId = findToken(arg(0))]
[h, if(tokenId == ""): tokenId = getImpersonated()]


[h, macro("crud/fetchAllSortilegi@this"): ""]
[h: allSortilegi = macro.return]
[h, macro("sortilegi/getKnownSortilegi@this"): tokenId]
[h: knownSortilegi = macro.return]

[h: sGruppoPreferenze = "Grimorio_Sortilegi"]
[h: bLightMode = getPreferenza("light_mode",tokenId,sGruppoPreferenze)]


[dialog5("GrimorioSortilegi","temporary=1; width=1000; height=800; closebutton=0;"):{
<html>	
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SortilegiCssLink.html")]
	<title>[r: getName(tokenId)] - Grimorio Sortilegi</title>
</head>
<body>

    <div class="grimoire-container [r, if(bLightMode == 1): 'light-mode']">
        <!-- Colonna Sinistra -->
        <div class="sidebar">
            <!-- Tab di Filtro Esplicite -->
            <div class="filter-tabs">
                <button class="filter-tab active" id="filter-all" onclick="filterByKnown(false)">Tutti</button>
                <button class="filter-tab" id="filter-known" onclick="filterByKnown(true)">Conosciuti</button>
            </div>

            <div class="search-area">
                <input type="text" placeholder="Cerca sortilegio..." value="" id="filter-name" oninput="filterByName(this.value)">
            </div>
            <div class="spell-list">
            [h: index = 0]
            [r, foreach(sortilegio, allSortilegi, ""), code:{
                [h: sortilegioId = json.get(sortilegio, "id")]
                [h, if(json.contains(knownSortilegi, sortilegioId)): bKnown = 1; bKnown = 0]
                <div id="[r: 'spell_item_' + index]" class="spell-item [r, if(index == 0): 'active']" data-sortilegio='[r: sortilegio]'
                        onclick="selectSortilegio([r: index]);">
                    <div class="spell-info">
                        <span>[r: json.get(sortilegio, "nome_descrittivo")]</span>
                        <small>[r: json.get(sortilegio, "school")]</small>
                    </div>
                    <div class="spell-meta-right">
                        <span class="badge">Lv [r: json.get(sortilegio, "level")]</span>
                        <span class="status-dot [r, if(bKnown): 'known'; 'unknown']" title="[r, if(bKnown): 'Conosciuto'; 'Non Conosciuto']"></span>
                    </div>
                </div>
                [h: index = index +1]
            }]
            </div>
        </div>

        <!-- Colonna Destra: Dettagli -->
        [h: sortilegio = json.get(allSortilegi, 0)]
        <div class="details-pane">
            <h1 id="name-value">[r: json.get(sortilegio, "nome_descrittivo")]</h1>
            
            
            <div class="stats-table">
                <div class="stat-label">Scuola</div>
                <div class="stat-value" id="school-value">[r: json.get(sortilegio, "school")]</div>
                
                <div class="stat-label">Livello</div>
                <div class="stat-value" id="level-value">[r: json.get(sortilegio, "level")]</div>
                
                <div class="stat-label">Tempo di lancio</div>
                <div class="stat-value" id="time-value">[r: json.get(sortilegio, "time")]</div>
                
                <div class="stat-label">Raggio d&rsquo; azione</div>
                <div class="stat-value" id="range-value">[r: json.get(sortilegio, "range")]</div>
                
                <div class="stat-label">Durata</div>
                <div class="stat-value" id="duration-value">[r: json.get(sortilegio, "duration")]</div>
                
                <div class="stat-label">Area</div>
                <div class="stat-value" id="area-value">[r: json.get(sortilegio, "area")]</div>
            </div>

            <div class="description" id="description-value">
                [r, foreach(par, json.get(sortilegio, "description"), ""), code:{
                    <p>[r: par]</p>
                }]
            </div>
        </div>
    </div>

    <script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/GrimorioSortilegi.js?cachelib=false" defer></script>
</body>
</html>
}]