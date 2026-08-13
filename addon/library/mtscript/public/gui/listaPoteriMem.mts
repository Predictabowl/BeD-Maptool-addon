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


[h, macro("powers/getDurataRecupero@this"): oToken]
[h: iRecuperoDurata = macro.return]
[h: jOptions = json.set(jOptions, "recupero", iRecuperoDurata)]
[h: lPoteri =  getPoteriMem(oToken)]


[frame5(sFrame,strformat("value=%s", oToken)):{
<html>
<head> 
		[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
		<title>[r: getName(oToken)] - Poteri Memorizzati</title> 
</head>
<body align="center">


<!-- Form Nascosto per refresh della lista -->
<form id="refreshListaPoteri" method="json" action="[r: macrolinkText("gui/updatePoteri@this","none",json.append("",sFrame,"clearAll"))]">
</form>

<!-- Spell List -->
<div class="spells-grid-container" id="spellList_Section" onmouseup="refreshSpellList(event)">

[r, foreach(nomeLib, lPoteri, ""), CODE:{
	[h, macro("powers/getSpellRecuperoStat@this"): nomeLib]
	[h: iRecuperoSpell = macro.return]
	[h: spellImg = fetchSpellImage(nomeLib)]
	[h, if(iRecuperoSpell > 0 && iRecuperoDurata > 0), code:{
		[recuperoContainer = "<span class='recupero-container'>"]
		[recuperoOverlay = strformat("<div class='recupero-overlay'>%{iRecuperoDurata}</div></span>")]
	};{
		[recuperoContainer = ""]
		[recuperoOverlay = ""]
	}]
 	<!-- Spell Card -->
	<div class="spell-card" draggable="true" data-id="[r: nomeLib]" ondragstart="handleDragStart(event)" ondragover="handleDragOver(event)" ondrop="handleDrop(event)" ondragend="handleDragEnd(event)">
		[r: recuperoContainer]
			<input type="image" class="spell-icon-btn" title="Lancia" src='[r: spellImg]' onclick='loadParams(this)' data-macro="gui/iniziaSpellCastWrapper@this" data-spellname="[r: nomeLib]"/>
		[r: recuperoOverlay]
		[r, macro("gui/CompileSpellStatGrid@this"): json.append(oToken, nomeLib)]
	</div>
}]

</div>
<form id="form_table_spell" name="managePoteri" method="json" action="[r:macroLinkText("gui/spellCastingHandler@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type='hidden' name='source' value='[r:oToken]'/>
	<input id='spell_Azione' type='hidden' name='tipoAzione' value=''/>
	<input id='spell_Macro' type='hidden' name='macro' value=''/>
	<input id='spell_SpellName' type='hidden' name='spellName' value=''/>
	<input id='spell_Extra' type='hidden' name='extraParam' value=''/>
	<input type='hidden' name='frame' value='[r: sFrame]'/>
</form>

<form id="saveOrderForm" action="[r: macroLinkText('gui/salvaNuovoOrdineSpells@' + getMacroLocation())]" method="POST">
	<input type="hidden" name="tokenId" id="tokenId" value="[r: oToken]">
	<input type="hidden" name="nuovaListaPoteri" id="nuovaListaPoteri" value="">
</form>


	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/listaPoteriMem.js?cachelib=true" defer></script>
	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellDescription.js?cachelib=true" defer></script>
</body>
</html>
}]
