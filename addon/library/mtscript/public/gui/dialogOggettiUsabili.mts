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
[h, if(!isNumber(iLarg)): iLarg = 800]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 700]



[h, macro("consumables/getInventarioConsumabili@this"): oToken]
[h: aSlotVeloci = macro.return]
[h: aPozioni = "[]"]
[h: aPergamene = "[]"]
[h: aZaino = "[]"]
[h: index = 0]
[h, foreach(oItem, aSlotVeloci), code:{
	[macro("consumables/getTipoConsumabile@this"): json.append(json.get(oItem, "libName"), 1)]
	[oItem = json.set(oItem, "index", index)]
	[bEquipped = json.get(oItem, "equipped")]
	[if(bEquipped != 1), code: {
		[aZaino = json.append(aZaino, oItem)]
	};{
		[if(macro.return == "POZIONE"): aPozioni = json.append(aPozioni, oItem); aPergamene = json.append(aPergamene, oItem)]
	}]
	[index = index +1]
}]

[h: iTox = getTossicoLiv(oToken)]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode",oToken,sThemePreferenze)]

[h: broadcast(strformat("width=%{iLarg}; height=%{iAltezza}"))]
[dialog5(sDialog,strformat("temporary=1; %{pSize}; closebutton=0")):{
	<html>
	

<head>
    <title>Consumabili - Quickslot</title>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
    <link rel="stylesheet" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/Consumables.css?cachelib=true">
</head>

<body class="[r, if(bLightMode == 1): 'light-mode']" data-tokenid = "[r: oToken]">

    <div class="quickslot-frame">
        <div class="global-header">
            <div class="slots-counter" id="slotsCounter">
				[h, macro("mobs/getNumSlotVeloci@this"): oToken]
				[h: iMaxSlots = macro.return]
                Slot: <span id="slotsUsed">[r: countSlotVeloceItems(oToken)]</span>/<span id="slotsMax">[r: iMaxSlots]</span>
            </div>
            <div class="header-actions">
                <button class="btn" id="toggleInvBtn" onclick="toggleInventory()">Apri Inventario ▼</button>
            </div>
            <div>
                <button class="header-theme-btn" id="themeToggle" title="Cambia Tema"
                    onclick="toggleTheme('[r: oToken]', '[r: sThemePreferenze]')">
                    🌓
                </button>
            </div>
        </div>

		<div class="quickslot-sections">
            <div class="spirits-main-container">
				<!-- POZIONI -->
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
                        <div class="grimoire-grid-container" id="pozioniGrid">
						[r, foreach(oPozione, aPozioni, ""), code:{
							[r, macro("gui/CompilePotionSpellCard@this"): json.append(oToken, oPozione, 1)]
						}]
                        </div>
                    </div>
	            </div>

				<!-- PERGAMENE -->
	            <div class="spirit-panel">
	                <div class="spirit-header">
	                    <div class="spirit-info">
	                        <h3 class="spirit-name">Pergamene</h3>
	                    </div>
	                </div>
	                <div class="spirit-body">
                        <div class="grimoire-grid-container" id="pergameneGrid">
						[r, foreach(oPergamena, aPergamene, ""), code:{
							[r, macro("gui/CompileScrollSpellCard@this"): json.append(oToken, oPergamena, 1)]
						}]
                        </div>
                    </div>
	            </div>

				<!-- RUNE -->
	            <div class="spirit-panel">
	                <div class="spirit-header">
	                    <div class="spirit-info">
	                        <h3 class="spirit-name">Rune</h3>
	                    </div>
	                </div>
	                <div class="spirit-body">
                        <div class="grimoire-grid-container" id="runeGrid">
							[h: aRuneAttive = getRuneAttive(oToken)]
							[r, foreach(oRuna, aRuneAttive, ""), code:{
								[r, macro("gui/CompileRuneSpellCard@this"): json.append(oToken, oRuna)]
							}]
                        </div>
                    </div>
	            </div>
            </div>
        </div>

        <div class="inventory-drawer" id="inventoryDrawer">
            <div class="spirit-header">
                <div class="spirit-info">
                    <h3 class="spirit-name">Inventario</h3>
                </div>
            </div>
            <div class="spirit-body">
                <div class="grimoire-grid-container" id="inventoryGrid" style="max-height: none;">
					[r, foreach(oConsumabile, aZaino, ""), code:{
						[r, macro("gui/CompileConsumableSpellCard@this"): json.append(oToken, oConsumabile, 0)]
					}]
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

    <script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/Consumables.js?cachelib=true" defer></script>
	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellCommonScripts.js?cachelib=true" defer></script>

</body>


	
	</html>
}]



