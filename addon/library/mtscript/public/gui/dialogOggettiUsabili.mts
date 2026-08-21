[h: oToken = arg(0)]

[h: sDialog = "OggettiConsumabili"]
[h: sGruppoPreferenze = "Dialog_Oggetti_Consumabili"]

[h, if(isDialogVisible(sDialog)), code:{
	[oProperties = getDialogProperties(sDialog)]
	[setPreferenza("larghezza",json.get(oProperties,"width"),oToken,sGruppoPreferenze)]
	[setPreferenza("altezza",json.get(oProperties,"height"),oToken,sGruppoPreferenze)]
	[closeDialog(sDialog)]
	[return(0,0)]
}]


[h, if(getOverride(oToken,"InventarioBloccato")), code:{
	[broadcast("Non è possibile accedere all'inventario in questo momento",getPlayerName())]
	[return(0,0)]
}]



[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 650]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 700]



[h, macro("consumables/getSlotVeloci@this"): oToken]
[h: aSlotVeloci = macro.return]
[h: aPozioni = "[]"]
[h: aScrolls = "[]"]
[h, foreach(oItem, aSlotVeloci), code:{
	[macro("consumables/getTipoConsumabile@this"): json.append(json.get(oItem, "libName"), 1)]
	[if(macro.return == "POZIONE"): aPozioni = json.append(aPozioni, oItem); aScrolls = json.append(aScrolls, oItem)]
}]

[h: iTox = getTossicoLiv(oToken)]


[h: pSize = strformat("width=%{iLarg}; height=%{iAltezza}")]
[frame5(sDialog,strformat("temporary=0; size=%{pSize}; closebutton=0")):{
	<html>
	

<head>
    <title>Consumabili - Quickslot</title>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
    <link rel="stylesheet" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/Consumables.css?cachelib=false">
</head>

<body class="light-mode">

    <div class="quickslot-frame">
        <div class="global-header">
            <div class="slots-counter" id="slotsCounter">
                Slot: <span id="slotsUsed">4</span>/<span id="slotsMax">6</span>
            </div>
            <div class="header-actions">
                <button class="btn" id="toggleInvBtn" onclick="toggleInventory()">Apri Inventario ▼</button>
            </div>
            <div>
                <button class="header-theme-btn" id="themeToggle" title="Cambia Tema"
                    onclick="toggleTheme('[r: oToken]', '[r: sGruppoPreferenze]')">
                    🌓
                </button>
            </div>
        </div>

		<div class="quickslot-sections">
            <div class="spirits-main-container">
	            <div class="spirit-panel">
	                <div class="spirit-header">
	                    <div class="spirit-info">
	                        <h3 class="spirit-name">Pozioni</h3>
	                        <div class="spirit-stats-row">
	                            <div class="devotion-wrapper">
	                                <span class="devotion-text">Tossicità</span>
	                                [h, macro("mechanics/getResistenzaTox@this"): oToken]
									[h: iResTox = macro.return]
	                                <div class="toxic-track">
	                                    <div class="toxic-fill" style="width: [r: 100*iTox/iResTox]%;"></div>
	                                </div>
	                                <span class="devotion-text">[r: iTox]/[r: iResTox]</span>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	                <div class="spirit-body">
                        <div class="grimoire-grid-container" id="pozioniGrid" style="max-height: none;">
						[r, foreach(oPozione, aPozioni, ""), code:{
							<div class="spell-card" data-type="pozione">
								[h: spellId = json.get(oPozione, "libName")]
                                <input type="image" class="spell-icon-btn" title="Usa"
                                    src="[r: fetchSpellImage(spellId)]"
                                    onclick='loadParams(this)' data-macro="gui/iniziaSpellCastWrapper@this"
                                    data-spellname="[r: spellId]" />
                                <div class="spell-name-badge [r: fetchConsumableProp(spellId, 'tipo')]" onclick="">[r: fetchConsumableProp(spellId, 'nome_decorativo')]</div>
                                <div class="potion-stats-grid">
                                    <div class="stat-box">
										<span class="stat-label">Tox:</span>
										<span class="stat-value toxicFont">[r: getTossicoOggetto(oPozione, oToken)]</span>
									</div>
                                    <div class="stat-box">
										<span class="stat-label">TE:</span>
										<span class="stat-value tempoFont">
											[h, macro("consumables/getItemTime@this"): json.append(oToken, spellId)]
											[r: macro.return]
										</span>
									</div>
                                    <div class="stat-box"><span class="stat-label">Liv:</span>
										[h, macro("consumables/getLivelloOggetto@this"): json.append(oPozione, oToken)]
										<spanclass="stat-value genericStatFont">[r: macro.return]
										</span>
									</div>
                                    <div class="stat-box">
										<span class="stat-label">MM:</span>
										<span class="stat-value mmFont">
											[h, macro("consumables/getMMOggetto@this"): json.append(oToken, spellId, "POZIONE")]
											[r: macro.return]
										</span>
									</div>
                                </div>
                                <button class="slot-toggle-btn unequip-btn" title="Rimuovi dalle Quickslot"
                                    onclick="unequipItem(this)">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                                        stroke-width="3" stroke-linecap="round">
                                        <line x1="4" y1="12" x2="20" y2="12" />
                                    </svg>
                                </button>
                            </div>
						}]
                        </div>
                    </div>
	            </div>
            </div>
        </div>


        <div class="inventory-drawer" id="inventoryDrawer">
            <div class="spirit-header">
                <div class="spirit-info">
                    <h3 class="spirit-name">Inventario Completo</h3>
                </div>
            </div>
            <div class="spirit-body">
                <div class="grimoire-grid-container" id="inventoryGrid" style="max-height: none;">

                 

                </div>
            </div>
        </div>
    </div>

    <form id="form_use_item" method="json" action="[r:macroLinkText("gui/useItemHandler@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type='hidden' name='source' value='[r:oToken]'/>
	<input id='spell_SpellName' type='hidden' name='spellName' value=''/>
	<input id='item_nomeArma' type='hidden' name='nomeArma' value=''/>
	<input id='item_slotRuna' type='hidden' name='slotRuna' value=''/>
	<input id='item_slotVeloce' type='hidden' name='slotVeloce' value=''/>
	</form>

    <script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/Consumables.js?cachelib=false" defer></script>
	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellCommonScripts.js?cachelib=false" defer></script>

</body>


	
	</html>
}]



