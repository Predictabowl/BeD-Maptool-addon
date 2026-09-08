[h: tokenId = arg(0)]
[h: sDialog = "DialogCambioArmi"]

[h: switchToken(tokenId)]


[h, if(isCombat()): sDisplayEquip = "none"; sDisplayEquip = "block"]

[h: oStili = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/stili.json")]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode",tokenId,sThemePreferenze)]

[dialog5(sDialog, strformat("temporary=0; width=525; height=870; closebutton=0; noframe=0;")):{
<html>

<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/ItemDetails.css?cachelib=false">
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/PannelloEquipaggiamento.css?cachelib=false">
	<title>[r: getName(tokenId)] - Equipaggiamento</title>
	
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']" data-tokenid="[r: tokenId]">
	<div class="equip-panel">
        <div class="equip-section">

            <!-- ===================== HEADER ===================== -->
            <div class="equip-header">
                <div class="equip-header-title-row">
                    <div class="equip-title">Equipaggiamento</div>
                    <div class="equip-badges">
                        <span class="info-badge">Stile <b id="styleValue">[r :json.path.read(oStili, Stile+ ".name")]</b></span>
                        <span class="info-badge">Ingombro <b><span id="carico-corrente">[r: getIngombroTotale(tokenId)]</span> / <span id="carico-max">[r:getCarico(tokenId)]</span></b></span>
                        <span class="info-badge">Addestramento Armature <b>[r: Add_Armature]</b></span>
                    </div>
                </div>
                <div class="demo-controls">
                    <button class="demo-btn" onclick="toggleCombat()">Simula Combattimento</button>
                    <button class="demo-btn" onclick="toggleWeaponHands()">Cambia Arma Primaria (1M/2M)</button>
                    <button class="demo-btn" onclick="simulateInvalidDrop()">Simula Slot Invalido</button>
                </div>
            </div>

            <!-- ===================== PAPERDOLL + QUICK WEAPONS ===================== -->
            <div class="equip-main">

				<div>
					<div class="section-label" style="text-align:center;">Armi Rapide</div>
					<div class="inventory-zone quick-weapons-vertical">
						<div class="equip-slot small" data-item-name="Arco Corto"
							onclick="openItemD.ock('Arco Corto', 'https://placehold.co/64x64/2a241f/d49a40?text=ARC')"
							onmouseenter="showSlotTooltip(this)" onmouseleave="hideSlotTooltip()">
							<img class="item-icon" src="https://placehold.co/64x64/2a241f/d49a40?text=ARC"
								alt="Arco Corto">
						</div>
						<div class="equip-slot small" data-item-name="Pugnale da Lancio"
							onclick="openItemDock(this)"
							onmouseenter="showSlotTooltip(this)" onmouseleave="hideSlotTooltip()">
							<img class="item-icon" src="https://placehold.co/64x64/2a241f/d49a40?text=PUG"
								alt="Pugnale da Lancio">
						</div>
						<div class="equip-slot small" data-item-name="Pugnale da Lancio"
							onclick="openItemDock(this)"
							onmouseenter="showSlotTooltip(this)" onmouseleave="hideSlotTooltip()">
							<img class="item-icon" src="https://placehold.co/64x64/2a241f/d49a40?text=PUG"
								alt="Pugnale da Lancio">
						</div>
					</div>
				</div>
                <!-- LEFT SLOTS -->
                <div class="paperdoll-container" style="background-image: url('[r: getTokenHandout()]');">
					<div class="equip-slot" id="slot-elmo" data-item-name="Elmo Rinforzato"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/ElmoBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"elmo")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-amuleto"
                            style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/AmuletoBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"amuleto")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-armatura" data-item-name="Corazza di Cuoio"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/ArmaturaBG.png')">
						[h, macro("mobs/getArmatura@this"): tokenId]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-mantello" data-item-name="Mantello Ombra"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/MantelloBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"mantello")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-guanti"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/GuantiBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"guanti")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-bracciali"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/BraccialiBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"bracciali")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-primary" data-item-name="Alabarda"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/ArmaBG.png')">
						[r, macro("gui/buildHtmlEquipItem@this"): getArma(tokenId,1)]
					</div>
					<div class="equip-slot locked" id="slot-secondary"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/ScudoBG.png')">
						[h, if(Stile == "AS"), code: { 
							[macro("mobs/getScudo@this"): tokenId]
							[oArma2 = macro.return]
						};{
							[oArma2 = getArma(tokenId, 2)]
						}]
						[r, macro("gui/buildHtmlEquipItem@this"): oArma2]
					</div>
					<div class="equip-slot" id="slot-cintura"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/CinturaBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"cintura")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-anello1" data-item-name="Anello della Quiete"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/AnelloBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"anello", 1)]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-stivali" data-item-name="Stivali del Viandante"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/StivaliBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"stivali")]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
					<div class="equip-slot" id="slot-anello2"
						style="background-image:url('lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/AnelloBG.png')">
						[h, macro("mobs/getAccessorioEquip@this"): json.append(tokenId,"anello", 2)]
						[r, macro("gui/buildHtmlEquipItem@this"): macro.return]
					</div>
                </div>


            </div>

            <!-- ===================== EQUIPAGGIAMENTO / INVENTARIO ===================== -->
 			<div class="inventory-section">
                <div class="inventory-header">
                    <div class="section-label">Inventario</div>
                    <span class="hint">Disponibile solo fuori combattimento</span>
                </div>
                <div class="inventory-zone" id="inventoryZone">
                    <div class="inventory-grid">
                        <div class="inv-item"
                            onclick="openItemDock(this)">
                            <img src="https://placehold.co/64x64/2a241f/d49a40?text=POZ" alt="Pozione Curativa"></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                        <div class="inv-item"><img src="https://placehold.co/64x64/2a241f/d49a40?text=OGG" alt=""></div>
                    </div>
                    <div class="inventory-lock-overlay">
                        <span class="lock-icon">&#128274;</span>
                        <span class="lock-text">Bloccato durante il combattimento</span>
                    </div>
                </div>
            </div>

            <!-- ===================== FOOTER ===================== -->
            <div class="equip-footer">
                <button class="btn-cancel" onclick="console.log('annulla - stub')">Annulla</button>
                <button class="btn-confirm" onclick="console.log('conferma - stub')">Conferma</button>
            </div>

        </div>

        <!-- UTILITY COLUMN: SOLO DOCK DESCRIZIONE OGGETTO -->
        <div class="description-column description-closed" id="descrizione-dock">
            <div class="dock-toolbar" id="dockToolbar">
                <button class="dock-close-btn" onclick="closeItemDock()">Chiudi</button>
            </div>
            <div class="item-dock" id="itemDock">
				[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/ComponentDettagliOggetto.html")]
            </div>
        </div>

        <!-- Shared item-name tooltip, repositioned per slot by showSlotTooltip() -->
        <div class="slot-tooltip" id="slotTooltip"></div>
    </div>

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/PannelloEquipaggiamento.js?cachelib=false" defer></script>
</body>
</html>
}]
