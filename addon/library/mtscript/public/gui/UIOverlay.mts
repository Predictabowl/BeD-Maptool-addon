[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: sOverlay = "UIOverlay"]

[macro("gui/setOverlayData@this"): json.append("token",oToken)]

[h: sSlotVelociLink = strformat("<a href='%s'><img src='%s' class='pulsanteUI' title='Slot Rapidi'/> </a>",
	macrolinkText("gui/dialogOggettiUsabili@this","none",json.append("",oToken)),getImage("Image:PulsanteInventario"))]
[h: sAltreAzioniLink = strformat("<a href='%s'><img src='%s' class='pulsanteUI' title='Altre Azioni'/></a>",
	macrolinkText("gui/showPannelloAzioni@this","none",json.append("",oToken)),"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/other_actions.png")]
[h, if(isArmaLancioEquipped(oToken)), code:{
	[sClass = "pulsanteUI"]
	[if(getOverride(oToken, "potereArmaLancio")): sClass = sClass + " pActiveBorder"]
	[sLancioLink = strformat(
		"<a onmouseup='pulsanteLancio(event)' title='Lancio Arma / Usa per Poteri'><img class='%{sClass}' id='throw-button-id' src='%s' /></a>","lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Throw_Icon.png")]
};{
	[sLancioLink = ""]
}]

[macro("class-skills/getMotiviConosciuti@this"): oToken]
[h, if(!json.isEmpty(macro.return)), code: {
	[h: sScegliMotivoLink = strformat("<a href='%s'><img src='%s' class='pulsanteUI' title='Seleziona Motivo'/></a>",
		macrolinkText("class-skills/setMotivoAttivo@this","none",json.append("",oToken)),"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Sonata_Icon.png")]
};{
	[h: sScegliMotivoLink = ""]
}]

[macro("class-skills/hasNecrofuria@this"): oToken]
[h, if(macro.return), code:{
	[macro("class-skills/isNecrofuriaActive@this"): oToken]
	[if(macro.return): sNecroFClass = " pActiveBorder"; sNecroFClass = ""]
	[sNecrofuriaLink = strformat("<a onclick='toggleNecrofuria()'><img src='%s' class='pulsanteUI%{sNecroFClass}' id='necrofuria-button' title='Attiva Necrofuria'/></a>",
		"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/necrofury.png")]
};{
	[sNecrofuriaLink = ""]
}]

[macro("class-skills/hasSovSpiritico@this"): oToken]
[h, if(macro.return), code:{
	[macro("class-skills/isSovSpiriticoActive@this"): oToken]
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

[h, macro("class-skills/getAbilitaInUso@this"): json.append(oToken, "PECULIARE")]
[h: bPeculiareActive = listCount(macro.return) > 0]
[h, macro("class-skills/getAbilitaInUso@this"): json.append(oToken, "ATTIVA")]
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


[overlay(sOverlay,"value=[r: oToken]"): {
	<html>
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css">
	<style>
		[r:"
			.pServitore{margin: 4px; padding:0px; height: 38px; width: 38px; border-radius:19px;}
			.pServitore:hover{color: rgb(0,0,0,0.5);opacity: 1.0; box-shadow: 0px 0px 15px green; }
			.pActiveBorder{filter: drop-shadow(0px 0px 5px gold);}
			.pPeculiareSkill{filter: drop-shadow(0px -3px 4px rgba(0,190,30,0.7));}
			.pAttivaSkill{filter: drop-shadow(0px 3px 4px rgba(255,230,30,0.7));}
			.pBothSkills{filter: drop-shadow(0px -3px 4px rgba(0,190,30,0.7)) drop-shadow(0px 3px 4px rgba(255,230,30,0.7));}
		"]
	</style>
	
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
				<a onmouseup="pulsanteRosso(event)" title='Risolvi / Interrompi azione'>
					<img class='pulsanteUI'  src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/resolve_action.png' />
				</a>
				<input type='image' class='pulsanteUI' name='Attacca' value='Attacca' src='[r: sIconaAttacco]' title='Attacco base' id='button-attacco'/>
				[r: sLancioLink]
				<a title='Abilità / Poteri Classe' onmouseup="pulsantePoteri(event)" class="[r: sAbilitaClass]">
					<img class='pulsanteUI' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/class_skills.png' />
				</a>
				[r: sScegliMotivoLink]
				[r: sNecrofuriaLink]
				[r: sSovSpiLink]
				[r: sAltreAzioniLink]
				<a title='Selezione / Centra / Spawn' onmouseup="pulsanteBersaglio(event)">
					<img class='pulsanteUI' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/target_select.png' />
				</a>
				[r: sCiclaVista]
				<input type='image' class='pulsanteUI' name='Aspettare' value='Aspettare' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pass_turn.png' title='Attesa'/>
				<input type="hidden" name="target" value="[r: oToken]"/>
				<input type="hidden" name="frameName" value=""/>
				<input type="hidden" id="var-input" name="buttonPressed" value="" />
			</div>
		</div>
		</form>
	</div>

	[r, if(sSwapToken != ""), code:{
	<form id="formRisolviAzione" method="json" action="[r:macroLinkText("gui/executeSwapTokenOverlay@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
		<div style="position:absolute; bottom:0px; left:2px; display:flex; justify-content:start; margin:0px; padding:0px;">
			<input type='image' class='pServitore' name='SwapToken' value='[r: sSwapToken]' src='[r: getTokenImage("",sSwapToken)]' title='Scambia' id='button-swap-token'/>
		</div>
	</form>
	}]

	<script>
	[r:"

		input.addEventListener('keypress', logKey);
		
		function logKey(e) {
			console.log(e.code);
		}
	
		function toggle_show_list() {
            var eDisplay = document.getElementById('dropdown-list');
            if (eDisplay.style.display == 'none'){
                eDisplay.style.display = 'block';
            }
            else{
                eDisplay.style.display = 'none';
            }
        }

        function pulsanteRosso(event){
    		var elem = document.getElementById('var-input');
        	if(event.button == 2){
        		elem.setAttribute('value','Interrompi');
        	} else {
        		elem.setAttribute('value','Azione');
        	}
        	document.getElementById('formRisolviAzione').submit();
        }

        function pulsanteToken(event){
    		var elem = document.getElementById('var-input');
        	if(event.button == 2){
        		elem.setAttribute('value','Equipaggiamento');
        	} else {
        		elem.setAttribute('value','FrameScheda');
        	}
        	document.getElementById('formRisolviAzione').submit();
        }

        function pulsanteBersaglio(event){
    		var elem = document.getElementById('var-input');
        	if(event.button == 2){
	    		elem.setAttribute('value','DespawnTokenBersaglio');
        	} else {
               	if(event.button == 1){
	        		elem.setAttribute('value','CentraToken');
	        	} else {
	        		elem.setAttribute('value','SelBersagli');
	        	}
        	}
        	document.getElementById('formRisolviAzione').submit();
        }

        function pulsantePoteri(event){
    		var elem = document.getElementById('var-input');
        	if(event.button == 2){
        		elem.setAttribute('value','PoteriClasse');
        	} else {
        		elem.setAttribute('value','AbilitaClasse');
        	}
        	document.getElementById('formRisolviAzione').submit();
        }

        function pulsanteLancio(event){
    		var elem = document.getElementById('var-input');
        	if(event.button == 2){
        		elem.setAttribute('value','TogglePoteriLancio');
        		document.getElementById('throw-button-id').classList.toggle('pActiveBorder');
        	} else {
        		elem.setAttribute('value','AttaccaLancio');
        	}
        	document.getElementById('formRisolviAzione').submit();
        }

        function toggleNecrofuria() {
        	document.getElementById('necrofuria-button').classList.toggle('pActiveBorder');
    		var elem = document.getElementById('var-input');
    		elem.setAttribute('value','ToggleNecrofuria');
        	document.getElementById('formRisolviAzione').submit();
        }

        function toggleSovSpiritico() {
        	document.getElementById('sov-spiritico-button').classList.toggle('pActiveBorder');
    		var elem = document.getElementById('var-input');
    		elem.setAttribute('value','ToggleSovSpiritico');
        	document.getElementById('formRisolviAzione').submit();
        }

	"]
	</script>
	</html>
}]