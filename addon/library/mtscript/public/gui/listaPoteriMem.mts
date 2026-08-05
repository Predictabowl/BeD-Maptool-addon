[h: oToken = arg(0)]
[h: sFrame = "Poteri"]
[h, if(argCount() > 1), code:{
	[sTemp = arg(1)]
	[if(startsWith(sTemp,sFrame)): sFrame = sTemp; sFrame = strformat("%{sFrame}%{sTemp}")]
}]

[h, if(sFrame == "Poteri"): bDefault = 1; bDefault = 0]

[h: bHideSpellNames = getPreferenza("hide_spell_names", oToken, "ListPoteriHTML")]
[h, if(!isNumber(bHideSpellNames)): bHideSpellNames = 0]
[h: jOptions = json.set("", "hideNames", bHideSpellNames)]

[h: sAggiornaLink = strformat("<a href='%s' class='relevantTitle' title='Clicca per aggiornare'>%s</a>",macrolinkText("gui/updatePoteri@this","none",json.append("",sFrame,"clearAll")),getName(oToken))]
[h: sSlotVelociLink = strformat("<a href='%s'><img src='%s' class='spellCastButton' title='Slot Rapidi'/> </a>",
	macrolinkText("gui/dialogOggettiUsabili@this","none",json.append("",oToken)), "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/quick_slots.png")]
	
[h, if(!bDefault), code:{
	[h: sAltreAzioniLink = strformat("<a href='%s'><img src='%s' class='pulsanteTondo' title='Altre Azioni'/></a>",
		macrolinkText("gui/showPannelloAzioni@this","none",json.append("",oToken)), "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/other_actions.png")]
	[h, if(isArmaLancioEquipped(oToken)):
		sLancioLink = strformat("<input type='image' class='pulsanteTondo' name='AttaccaLancio' value='AttaccaLancio' src='%s' ' class='image' title='Attacco con arma da lancio' id='button-attaccoLancio'/>","lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Throw_Icon.png");
		sLancioLink = ""]
	
	[h, macro("combat/isStileDistanza@this"): oToken]
	[h, if(macro.return): sIconaAttacco = "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Ranged_Icon.png";
		sIconaAttacco =  "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/Melee_Icon.png" ]
}]

[h, macro("powers/getDurataRecupero@this"): oToken]
[h: iRecuperoDurata = macro.return]
[h: jOptions = json.set(jOptions, "recupero", iRecuperoDurata)]
[h: lPoteri =  getPoteriMem(oToken)]

[frame5(sFrame,strformat("value=%s", oToken)):{
<html>
<head> 
		[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
		<title> Poteri Memorizzati</title> 
</head>
<body align="center">
<div>[r: sAggiornaLink]</div>

<!-- Form Nascosto per descrizione spell -->
<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneSpell@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type="hidden" name="libSpell" value ="" id="input_lib_spell" />
	<input type="hidden" name="token" value ="[r:oToken]"/>
</form>

<!-- Form pulsanti azioni -->
[r, if(!bDefault), code:{
	<form name="risolviAzione" method="json" action="[r:macroLinkText("gui/pulsantiPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<div style="margin-left:30px; display:grid; grid-template-columns: repeat(10,auto); justify-content: space-evenly;">
		<input type='image' class='pulsanteTondo' id='button-risolvi' name='Azione' value='Azione' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/resolve_action.png' class='image' title='Risolvi azione'/>
		<input type='image' class='pulsanteTondo' name='Attacca' value='Attacca' src='[r: sIconaAttacco]' class='image' title='Attacco base' id='button-attacco'/>
		[r: sLancioLink]
		<input type="image" class='pulsanteTondo' name='DialogAbilita' value='DialogAbilita' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/class_skills.png' class='image' title='Abilità di Classe'/>
		[r: sAltreAzioniLink]
		<input type="image" class='pulsanteTondo' name='SelBersagli' value='SelBersagli' src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/target_select.png' class='image' title='Auto selezione bersagli'/>
		<input type='image' class='pulsanteTondo' name='Aspettare' value='Aspettare' src='[r: "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pass_turn.png"]' class='image' title='Aspetta' id='button-aspetta'/>
		<input type='image' class='pulsanteTondo' name='Interrompi' value='Interrompi' src='[r: getImage("Image:PulsanteStop")]' class='image' title='Interrompi azione' id='button-interrompi'/>
		<input type="hidden" name="target" value="[r: oToken]"/>
		<input type="hidden" name="frameName" value="[r: sFrame]"/>
		
	</div>
	</form>
}]
	
<!-- Spell List Split Section -->
[h,if(!bDefault): sSplitStyle="top:95px;"; sSplitStyle="top:45px;"]
<div class="splitSpellList" style="[r: sSplitStyle]" id="spellList_Section">
[h: classType="evenRow"]
<table class="scrollBarSpace" id="tabella_poteri_mem">
<tr class="genericTable"> <td>[r:sSlotVelociLink]</td>
[r, if(!bHideSpellNames), code:{<th> Nome </th>};{}]
<th> Ma </th><th> PF </th> <th> PA </th><th> Te </th>
[r, foreach(nomeLib, lPoteri, ""), CODE:{
	[h, if(classType=="evenRow"): classType = "oddRow"; classType = "evenRow"]
	<tr class='[r:classType]' data-spellName='[r:nomeLib]' id='[r:nomeLib]'>
		[h, macro("gui/makeRigaPotere@this"):json.append(oToken,nomeLib, jOptions)]
		[r: macro.return]
	</tr>
}]
</table>

<form id="form_table_spell" name="managePoteri" method="json" action="[r:macroLinkText("gui/spellCastingHandler@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type='hidden' name='source' value='[r:oToken]'/>
	<input id='spell_Azione' type='hidden' name='tipoAzione' value=''/>
	<input id='spell_Macro' type='hidden' name='macro' value=''/>
	<input id='spell_SpellName' type='hidden' name='spellName' value=''/>
	<input id='spell_Extra' type='hidden' name='extraParam' value=''/>
	<input type='hidden' name='frame' value='[r: sFrame]'/>
</form>

<form  name="memPoteri" method="json" action="[r:macroLinkText("gui/pulsantiGestionePoteri@"+ getMacroLocation())]" style="display:flex; flex-wrap:wrap; justify-content:center; gap:5px;">
	<input type="submit" name="Mantieni" value="Mantieni" /> &nbsp;
	[h: oLibro = getLibroPoteri(oToken)]
	[h, if(json.isEmpty(oLibro)), code:{
		[sDisabled = "disabled"]
	};{
		[sDisabled = ""]	
	}]
	<input type="submit" name="LibroPot" value="Libro" [r: sDisabled]/> &nbsp;
	<input type="submit" name="Ordina" value="Ordina" />
	<input type="hidden" name="target" value="[r: oToken]"/>
</form>

<div id='count_rows_poteri'> Numero Poteri: <span style="font-weight:bold">[r:json.length(lPoteri)]</span> </div>

</div>

<script>
	[r:"

	function toggle_visibility(sId){
		var elem = document.getElementById(sId);
		if(elem.style.display == 'none')
			elem.style.display='block';
		else
			elem.style.display='none';
	}
	
	function toggle_visibility_name(sName){
		var cElem = document.getElementsByName(sName);
		var i;
		for (i = 0; i < cElem.length; i++){
			if(cElem[i].style.display == 'none')
				cElem[i].style.display='block';
			else
				cElem[i].style.display='none';
		}
	}

	function loadParams(elem){
		document.getElementById('spell_Macro').setAttribute('value',elem.getAttribute('data-macro'));
		document.getElementById('spell_SpellName').setAttribute('value',elem.getAttribute('data-spellName'));
		document.getElementById('spell_Azione').setAttribute('value','lancio');
		document.getElementById('form_table_spell').submit();
	}
	
	function apri_dialog_descrizione(sLibName){
		document.getElementById('input_lib_spell').setAttribute('value',sLibName);
		document.getElementById('dialogDescrizioneForm').submit();
	}

	"]
</script>
</body>
</html>
}]
