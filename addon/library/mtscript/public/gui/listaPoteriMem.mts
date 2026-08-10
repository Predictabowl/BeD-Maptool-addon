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
		[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
		<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/Spells.css?cachelib=false">
		<title> Poteri Memorizzati</title> 
</head>
<body align="center">
<div>
	<a href='[r: macrolinkText("gui/updatePoteri@this","none",json.append("",sFrame,"clearAll"))]' class='relevantTitle' title='Clicca per aggiornare'>
		[r: getName(oToken)]
	</a>
</div>

<!-- Form Nascosto per descrizione spell -->
<form id="dialogDescrizioneForm" method="json" action="[r:macroLinkText("gui/dialogDescrizioneSpell@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type="hidden" name="libSpell" value ="" id="input_lib_spell" />
	<input type="hidden" name="token" value ="[r:oToken]"/>
</form>

<!-- Spell List Split Section -->
[h,if(!bDefault): sSplitStyle="top:95px;"; sSplitStyle="top:45px;"]
<div class="splitSpellList" id="spellList_Section">

[r, foreach(nomeLib, lPoteri, ""), CODE:{
	[h, macro("gui/CompileSpellCardValues@this"):json.append(oToken,nomeLib)]
	[h: oSpellData = macro.return]
	[h: iRecuperoSpell = json.get(oSpellData, "recupero")]
	[h, if(iRecuperoSpell > 0 && iRecuperoDurata > 0), code:{
		[recuperoContainer = "<span class='recupero-container'>"]
		[recuperoOverlay = strformat("<div class='recupero-overlay'>%{iRecuperoDurata}</div></span>")]
	};{
		[recuperoContainer = ""]
		[recuperoOverlay = ""]
	}]
 	<!-- Spell Card -->
    <div class="spell-card">
		[r: recuperoContainer]
			<input type="image" class="spell-icon-btn" title="Lancia" src='[r: json.get(oSpellData, "image")]' onclick='loadParams(this)' data-macro="gui/iniziaSpellCastWrapper@this" data-spellname="[r: nomeLib]"/>
		[r: recuperoOverlay]

		[h: sJScriptSpell = strformat('apri_dialog_descrizione("%{nomeLib}")')]
        <div class='spell-name-badge [r: json.get(oSpellData, "tipo")]' onclick='[r: sJScriptSpell]'>
            [r: json.get(oSpellData, "nome")]
        </div>
		[h: "†"]
        <div class="spell-stats-grid">
            <div class="stat-box">
                <span class="stat-label">M:</span>
				[h: manaMant = json.get(oSpellData,"ManaMant")]
				[h, if(manaMant>0): manaMant="†"+manaMant; manaMant=""]
				[r: strformat("<span class='stat-value manaFont'>%s%{manaMant}</span>", json.get(oSpellData, "mana"))]
            </div>
            <div class="stat-box">
				[h: pfMant = json.get(oSpellData,"PFMant")]
				[h, if(pfMant>0): pfMant="†"+pfMant; pfMant=""]
                <span class="stat-label">PF:</span>
                <span class="stat-value faticaFont">[r: json.get(oSpellData, "PF")][r: pfMant]</span>
            </div>
            <div class="stat-box">
                <span class="stat-label">TE:</span>
                <span class="stat-value tempoFont">[r: json.get(oSpellData, "tempo")]</span>
            </div>
            <div class="stat-box">
                <span class="stat-label">PA:</span>
                <span class="stat-value azioneFont">[r: json.get(oSpellData, "PA")]</span>
            </div>
            <div class="stat-box">
                <span class="stat-label">PP:</span>
				[h: ppMant = json.get(oSpellData,"PPMant")]
				[h, if(ppMant>0): ppMant="†"+ppMant; ppMant=""]
                <span class="stat-value ppFont">[r: json.get(oSpellData, "PP")][r: ppMant]</span>
            </div>
            <div class="stat-box">
                <span class="stat-label">MM:</span>
                <span class="stat-value mmFont">[r: json.get(oSpellData, "MM")]</span>
            </div>
        </div>
    </div>
}]

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


</div>

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/listaPoteriMem.js?cachelib=false" defer></script>
</body>
</html>
}]
