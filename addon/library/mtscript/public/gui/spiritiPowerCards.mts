[h: oToken = arg(0)]
[h: sSpiritName = arg(1)]


[h: aSpells = getPoteriSpirito(oToken, sSpiritName)]
[r, foreach(spellId, aSpells, ""), code:{
	<div class='spell-card'>
		[r, macro("gui/CompileSpellStatGrid@this"): json.append(oToken, spellId)]
	</div>		
}]

