[h: oToken = arg(0)]
[h: sDialog = "DialogCambioArmi"]

[h: switchToken(oToken)]
[macro("mobs/getArmatura@this"): oToken]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconArmatura = macro.return]

[h: iconAnello1 = ""]
[h: iconAnello2 = ""]
[h: iconAmuleto = ""]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"anello")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconAnello1 = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"anello",2)]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconAnello2 = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"amuleto")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconAmuleto = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"bracciali")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconBracciali = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"mantello")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconMantello = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"cintura")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconCintura = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"stivali")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconStivali = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"guanti")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconGuanti = macro.return]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"elmo")]
[macro("gui/makeHtmlOggetto@this"): json.append(macro.return,oToken)]
[h: iconElmo= macro.return]

[h: oArma = getArma(oToken,1)]
[macro("gui/makeHtmlOggetto@this"): json.append(oArma,oToken)]
[h: iconArma = macro.return]
[h, if(isStileDistanza(oToken)), code:{
	[sSlotArma1Cat = "armaDistanza"]
	[bgArma1 = "Image:ArcoBG"]
};{
	[bgArma1 = "Image:ArmaBG"]
	[sSlotArma1Cat = "arma"]
}]

[h: iconArma2 = ""]
[h: bgArma2 = ""]
[h: sSlotArma2Cat = "bloccato"]
[macro("combat/isStile2A@this"): oToken]
[h: b2Armi = macro.return]
[h, if(b2Armi), code:{
	[h: bgArma2 = "Image:ArmaBG"]
	[h: oArma2 = getArma(oToken,2)]
	[macro("gui/makeHtmlOggetto@this"): json.append(oArma2,oToken)]
	[h: iconArma2 = macro.return]
	[h: sSlotArma2Cat = "arma"]
	
}]

[macro("combat/isStile2M@this"): oToken]
[h: b2Mani = macro.return]

[macro("combat/isStileAS@this"): oToken]
[h: bScudo = macro.return]
[h, if(bScudo), code:{
	[h: bgArma2 = "Image:ScudoBG"]
	[macro("mobs/getScudo@this"): oToken]
	[h: oArma2 = macro.return]
	[macro("gui/makeHtmlOggetto@this"): json.append(oArma2,oToken)]
	[h: iconArma2 = macro.return]
	[h: sSlotArma2Cat = "scudo"]
}]

[macro("combat/isStile1A@this"): oToken]
[h, if(macro.return), code:{
	[h: bgArma2 = "Image:LancioBG"]
	[h: oArma2 = getArma(oToken,2)]
	[macro("gui/makeHtmlOggetto@this"): json.append(oArma2,oToken)]
	[h: iconArma2 = macro.return]
	[h: sSlotArma2Cat = "armaLancio"]
}]
[h: iAddArmatura = getProperty("Add_Armature", oToken)]

[h, if(isCombat()): sDisplayEquip = "none"; sDisplayEquip = "block"]


[dialog5(sDialog, strformat("temporary=1; width=640; height=745; closebutton=0; noframe=1;")):{
<html>

<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css">
	<title>Equipaggiamento</title>
	<style>[r:"
		.tooltipBox {
			position: absolute;
			display:inline-block;
			font-family: Vecna;
			font-weight:bold;
			font-size: 0.875em;
			position: absolute;
			color: white;
			background-color: black;
			padding: 5px;
			border-radius: 6px;
			opacity: 0.9;
		}
		
		.hiddenBox {
			display:none;
		}
		"]
	</style>
</head>
<body align="center">
	<div class="relevantTitle"> [r: getName(oToken)] </div>
	<div style="display:grid; grid-template-columns: auto auto; place-content:start space-around; grid-gap:5px; margin-left:5px; margin-right:5px;">
	
	<!-- PAPERDOLL -->
		<div style="background-image: url('[r: getTokenHandout()]'); background-size: auto 400px; width:300px; height:400px; background-repeat:no-repeat; background-position:center; grid-row: 1/ span 2;">
			<div class="paperdoll-container">
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotElmo",iconElmo,"Image:ElmoBG","elmo")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotAmuleto",iconAmuleto,"Image:AmuletoBG","amuleto")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotArmatura",iconArmatura,"Image:ArmaturaBG","armatura")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotMantello",iconMantello,"Image:MantelloBG","mantello")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotGuanti",iconGuanti,"Image:GuantiBG","guanti")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotBracciali",iconBracciali,"Image:BraccialiBG","bracciali")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotArma1",iconArma,bgArma1,sSlotArma1Cat)]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotArma2",iconArma2,bgArma2,sSlotArma2Cat)]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotCintura",iconCintura,"Image:CinturaBG","cintura")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotAnello1",iconAnello1,"Image:AnelloBG","anello")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotStivali",iconStivali,"Image:StivaliBG","stivali")]
				[r, macro("gui/makeHtmlGridItem@this"):json.append("slotAnello2",iconAnello2,"Image:AnelloBG","anello")]
			</div>
			
		</div>

	<!--SLOT RAPIDI -->
		<div style="width:max-content; height: max-content;">
			[macro("gui/makeStiliInputList@this"): oToken]
			<div class="titleFont" style="margin-bottom:5px; background-color:black; color:orangered; border: 1px solid orangered;">
				Armi Rapide
			</div>
			<div style="background-color:#FFECE6; box-shadow: inset 0px 0px 20px 5px orangered;">
				<div id="slotRapidi" class="inventory-container" data-categoria="slotRapido" ondrop='drop(event)' ondragover='allowDrop(event)' ondragenter='dragEnter(event)' ondragleave='dragLeave(event)' style="width:276px; height:106px;">
					[r, macro("gui/makeHtmlEquip@this"): json.append(oToken,1)]
				</div>
			</div>
		</div>
		
	<!-- DESCRIZIONE -->
		<div id="box-descrizione-oggetto" class="itemInfo"
				style="width:280px; height:206px; border:1px solid black;
				padding-top: 5px; padding-bottom:5px; padding-left: 10px; padding-right: 10px; 
				overflow-y:scroll; grid-row: 3;">
			<form id="linkInChatFormId" method="json" action="[r:macroLinkText("gui/linkOggettoInChat@this")]" style="margin:0px;">
				<input type="hidden" name="itemId" value="" id="linkItemInputId">
				<input type="hidden" name="token" value="[r: oToken]">
			</form>
			<div id="nomeOggetto" class="spellFont" style="font-size:120%; text-align:center; color:red; font-weight:bold; margin-bottom:5px; cursor:pointer;"
				onclick="jsFormSubmit('linkInChatFormId')"></div>
			<div id="datiArma" style="display:none; margin:0; padding:0;">
				<div style="border-bottom:1px solid; padding-bottom:0; margin-bottom:3px;">
					<div style="display:inline-grid; grid-template-columns: auto auto; justify-content: space-between; width:95%; padding:0; margin:0;">
						<div style="margin:0; padding:0">
							Danno 1M: <span id="descrDanno" style="color:darkorange;"></span> 
						</div>
						<div id="descrCaA" style="margin:0; padding:0"></div>
						<div style="margin:0; padding:0">
							Danno 2M: <span id="descrDanno2M" style="color:darkorange;"></span> 
						</div>
						<div style="margin:0; padding:0">Portata: <span id="portataWId"></span></div>
					</div>
				</div>
				<ul id="listaAttributiArma" style="color:darkgreen; margin-bottom:0; margin-top:0;">
				</ul>
			</div>
			<ul id="listaAttributi" style="color:blue; margin-bottom:0; margin-top:0;">
			</ul>
			<div style="display:inline-grid; grid-template-columns: auto auto; justify-content: space-between; align-items:center; width:95%; padding:0px;">
				<div id="descrIngombro"></div>
				<div id="descrAddestramento"></div>
				<div id="listaRune"	style="display:grid; gap:4px; grid-template-columns: repeat(3,auto); justify-content:start;"></div>
			</div>
			<p id="descrizioneOggetto"></p>
		</div>
		
		
	<!-- EQUIPAGGIAMENTO-->
		<div id="listaOggetti" style="display: [r: sDisplayEquip]; width:max-content; height: 410px; grid-column: 2; grid-row: 2/ span 2;">
			<div class="titleFont" style="margin-bottom:5px; background-color:black; color:gold; border: 1px solid gold;">Equipaggiamento</div>
			<div style="background-color:lightyellow; box-shadow: inset 0px 0px 30px 5px gold;">
				<div class="inventory-container" data-categoria="inventario" ondrop='drop(event)' ondragover='allowDrop(event)' ondragenter='dragEnter(event)' ondragleave='dragLeave(event)' style="width:276px; height:348px;">
					[r, macro("gui/makeHtmlEquip@this"): oToken]
				</div>
			</div>
			<div class="titleFont" style="margin-bottom:0px; background-color:black; color:lightblue; border: 1px solid lightblue;">
				Ingombro: <span id="carico-corrente">[r: getIngombroTotale(oToken)]</span>/<span id="carico-max">[r:getCarico(oToken)]</span>
			</div>
			<div class="titleFont" style="margin-bottom:0px; background-color:black; color:orchid; border: 1px solid orchid;">
				Addestramento Armature: [r: iAddArmatura]
			</div>
		</div>
	</div>
	<div  style="display:flex; justify-content:space-evenly; margin-top:8px; margin-bottom:0px; padding-bottom:0px;">
		<form id="equip-form" method="json" action="[r:macroLinkText("gui/inizioCambioArma@this")]" style="margin:0px;">
			<input type="hidden" id="input-armatura" name="input-armatura" value="">
			<input type="hidden" id="input-amuleto" name="input-amuleto" value="">
			<input type="hidden" id="input-anello1" name="input-anello1" value="">
			<input type="hidden" id="input-anello2" name="input-anello2" value="">
			<input type="hidden" id="input-arma1" name="input-arma1" value="">
			<input type="hidden" id="input-arma2" name="input-arma2" value="">
			<input type="hidden" id="input-bracciali" name="input-bracciali" value="">
			<input type="hidden" id="input-mantello" name="input-mantello" value="">
			<input type="hidden" id="input-cintura" name="input-cintura" value="">
			<input type="hidden" id="input-stivali" name="input-stivali" value="">
			<input type="hidden" id="input-guanti" name="input-guanti" value="">
			<input type="hidden" id="input-elmo" name="input-elmo" value="">
			<input type="hidden" id="input-slotRapidi" name="input-slotRapidi"  value="">
			<input type="hidden" name="token" value="[r: oToken]">
			<input type="button" onclick="setInputValues()" name ="bottonw" value="Conferma">
		</form>
		<form method="json" action="[r:macroLinkText("gui/closeWindow@this")]" style="margin:0px;">
			<input type="hidden" name="name" value="[r: sDialog]">
			<input type="submit" name="button-annulla" value="Annulla">
		</form>
	</div>
	<meta id="dataNode" data-dueMani="[r:b2Mani]" data-addestramento="[r: iAddArmatura]">
	<div id="tooltipBox" class="hiddenBox">Test</div>
	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/inventarioArmi.js?cachelib=true"></script>
</body>
</html>
}]
