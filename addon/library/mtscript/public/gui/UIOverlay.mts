[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: sOverlay = "UIOverlay"]

[macro("gui/setOverlayData@this"): json.append("token",oToken)]

[h: sSlotVelociLink = strformat("<a href='%s'><img src='%s' class='pulsanteUI' title='Slot Rapidi'/> </a>",
	macrolinkText("gui/dialogOggettiUsabili@this","none",json.append("",oToken)), "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/quick_slots.png")]
[h: sAltreAzioniLink = strformat("<a href='%s'><img src='%s' class='pulsanteUI' title='Altre Azioni'/></a>",
	macrolinkText("gui/showPannelloAzioni@this","none",json.append("",oToken)),"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/other_actions.png")]
[h, if(isArmaLancioEquipped(oToken)), code:{
	[sClass = "pulsanteUI"]
	[if(getOverride(oToken, "potereArmaLancio")): sClass = sClass + " pActiveBorder"]
	[sLancioLink = strformat("<a onmouseup='pulsanteLancio(event)' title='Lancio Arma / Usa per Poteri'><img class='%{sClass}' id='throw-button-id' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Throw_Icon.png' /></a>")]
};{
	[sLancioLink = ""]
}]

[macro("class_skills/getMotiviConosciuti@this"): oToken]
[h, if(!json.isEmpty(macro.return)), code: {
	[h: sScegliMotivoLink = strformat("<a href='%s'><img src='%s' class='pulsanteUI' title='Seleziona Motivo'/></a>",
		macrolinkText("class_skills/setMotivoAttivo@this","none",json.append("",oToken)),"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Sonata_Icon.png")]
};{
	[h: sScegliMotivoLink = ""]
}]

[macro("class_skills/hasNecrofuria@this"): oToken]
[h, if(macro.return), code:{
	[macro("class_skills/isNecrofuriaActive@this"): oToken]
	[if(macro.return): sNecroFClass = " pActiveBorder"; sNecroFClass = ""]
	[sNecrofuriaLink = strformat("<a onclick='toggleNecrofuria()'><img src='%s' class='pulsanteUI%{sNecroFClass}' id='necrofuria-button' title='Attiva Necrofuria'/></a>",
		"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/necrofury.png")]
};{
	[sNecrofuriaLink = ""]
}]

[macro("class_skills/hasSovSpiritico@this"): oToken]
[h, if(macro.return), code:{
	[macro("class_skills/isSovSpiriticoActive@this"): oToken]
	[if(macro.return): sSovSpiClass = " pActiveBorder"; sSovSpiClass = ""]
	[sSovSpiLink = strformat("<a onclick='toggleSovSpiritico()'><img src='%s' class='pulsanteUI%{sSovSpiClass}' id='sov-spiritico-button' title='Attiva Sovraccarico Spiritico'/></a>",
		"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/spiritic_overload.png")]
};{
	[sSovSpiLink = ""]
}]

[h, macro("combat/isStileDistanza@this"): oToken]
[h, if(macro.return): sIconaAttacco = "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Ranged_Icon.png";
	sIconaAttacco =  "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Melee_Icon.png"]

[h: sSwapToken = getServitore(oToken)]
[h, if(sSwapToken == ""), code:{
	[macro("core/getPadrone@this"): oToken]
	[sSwapToken = macro.return]
}]

[h, macro("class_skills/getAbilitaInUso@this"): json.append(oToken, "PECULIARE")]
[h: bPeculiareActive = listCount(macro.return) > 0]
[h, macro("class_skills/getAbilitaInUso@this"): json.append(oToken, "ATTIVA")]
[h: bAttivaActive = listCount(macro.return) > 0]
[h, if(bPeculiareActive), code:{
	[if(bAttivaActive): sAbilitaClass = "pBothSkills"; sAbilitaClass = "pPeculiareSkill"]
};{
	[if(bAttivaActive): sAbilitaClass = "pAttivaSkill"; sAbilitaClass = ""]	
}]

[h: bCiclaVista = getPreferenza("BottoneCiclaVista",oToken,"Overlay")]
[h, if(bCiclaVista == 1): 
	sCiclaVista = strformat("<input type='image' class='pulsanteUI' name='CiclaVista' value='CiclaVista' src='%s' title='Cicla vista personaggio'/>","lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/sight_cycle.png"); 
	sCiclaVista = ""]


[h: oLibro = getLibroPoteri(oToken)]
[h, if(json.isEmpty(oLibro)): showBook = "none"; showBook = "block"]	

[overlay(sOverlay,"value=[r: oToken]"): {
	<html>
	<head>
		[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
		<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/UIOverlay.css?cachelib=true">
	</head>
	<body>
	<div>
		<!-- Form pulsanti azioni -->
		<form id="formRisolviAzione" method="json" action="[r:macroLinkText("gui/pulsantiPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
			<div style="position:absolute; bottom:0px; left:50px; display:flex; justify-content:start; margin:0px; padding:0px;">
				<div style="heigth:100%; width:min-content; display:grid; gap:0px; grid-template-columns: repeat(15,auto); justify-content: center; align-content: end; align-items:center; background-color:rgba(0,0,0,0.2); border-radius:28px;">
				
					<div style="margin:0px; padding-right: 5px;">
						<a style="color:inherit;" onmouseup="pulsanteToken(event)" title='Apri Scheda / Equipaggiamento'>
							<img src="[r: getTokenImage()]" class="pulsanteGrande" style="box-shadow: 0px 0px 8px; border-radius:28px;" />
						</a>
					</div>
					<a onmouseup="pulsanteRosso(event)" title='Risolvi / Apri Menu'>
						<img class='pulsanteUI'  src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/resolve_action.png' />
					</a>
					<input type='image' class='pulsanteUI' name='Attacca' value='Attacca' src='[r: sIconaAttacco]' title='Attacco base' id='button-attacco'/>
					[r: sLancioLink]
					<a title='Abilità / Apri Menu' onmouseup="pulsantePoteri(event)" class="[r: sAbilitaClass]">
						<img class='pulsanteUI' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/class_skills.png' />
					</a>
					<a type='image' title='Consumabili / Apri Menu' onmouseup="pulsanteConsumabili(event)">
						<img class='pulsanteUI' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/medieval-magic-theme-backpack_2661820.png' />
					</a>
					[r: sScegliMotivoLink]
					[r: sNecrofuriaLink]
					[r: sSovSpiLink]
					[r: sAltreAzioniLink]
					<a title='Selezione / Spawn / Apri Menu' onmouseup="pulsanteBersaglio(event)">
						<img class='pulsanteUI' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/target_select.png' />
					</a>
					[r: sCiclaVista]
					<input type='image' class='pulsanteUI' name='Aspettare' value='Aspettare' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pass_turn.png' title='Attesa'/>
					<input type="hidden" name="target" value="[r: oToken]"/>
					<input type="hidden" name="frameName" value=""/>
					<input type="hidden" id="var-input" name="buttonPressed" value="" />
				</div>
			</div>
			<div id="floatingSubmenu" class="submenu"  onmouseleave="scheduleSubmenuClose()" onmouseenter="cancelSubmenuClose()"></div>
			<template id="submenu-azione">
				<a onmouseup="scegliEvento(event,'Azione')">Risolvi</a>
				<a onmouseup="scegliEvento(event,'Interrompi')">Annulla</a>
			</template>
			<template id="submenu-poteri">
				<a onclick="scegliEvento(event,'AbilitaClasse')">Abilità di Classe</a>
				<a onmouseup="scegliEvento(event,'PoteriClasse')">Incantesimi e Poteri</a>
				<a onmouseup="scegliEvento(event,'LibroIncantesimi')" style="display:[r:showBook];">Libro Incantesimi</a>
				<a onmouseup="scegliEvento(event,'Sortilegi')">Sortilegi</a>
				<a onmouseup="scegliEvento(event,'Mantenimenti')">Mantenimenti</a>
			</template>
			<template id="submenu-consumabili">
				<a onmouseup="scegliEvento(event,'Consumabili')">Consumabili</a>
				<a onmouseup="scegliEvento(event,'Equipaggiamento')">Equipaggiamento</a>
			</template>
			<template id="submenu-bersaglio">
				<a onclick="scegliEvento(event,'SelBersagli')">Autoseleziona bersagli</a>
				<a onmouseup="scegliEvento(event,'DespawnTokenBersaglio')">Spawn Mirino</a>
				<a onmouseup="scegliEvento(event,'CentraToken')">Centra Personaggio</a>
			</template>			
		</form>
	</div>

	[r, if(sSwapToken != ""), code:{
	<form id="formRisolviAzione" method="json" action="[r:macroLinkText("gui/executeSwapTokenOverlay@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<div style="position:absolute; bottom:0px; left:2px; display:flex; justify-content:start; margin:0px; padding:0px;">
			<input type='image' class='pServitore' name='SwapToken' value='[r: sSwapToken]' src='[r: getTokenImage("",sSwapToken)]' title='Scambia' id='button-swap-token'/>
		</div>
	</form>
	}]

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/UIOverlay.js?cachelib=true" defer></script>
	</body>
	</html>
}]