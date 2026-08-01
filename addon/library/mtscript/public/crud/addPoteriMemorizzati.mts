[h: oToken = arg(0)]
[h: lSpellName = arg(1)]

[h: lPoteri = getPoteriMem(oToken)]

[h, foreach(spellName,lSpellName), code:{
	[lPoteri = json.append(LPoteri,spellName)]
}]

[h: setPoteriMem(oToken,lPoteri)]