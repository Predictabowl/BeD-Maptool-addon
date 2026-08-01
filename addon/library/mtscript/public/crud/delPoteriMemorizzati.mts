[h: oToken = arg(0)]
[h: lSpellName = arg(1)]

[h: lPoteri = getPoteriMem(oToken)]

[h, foreach(spellName,lSpellName), code:{
	[iIndex = json.indexOf(lPoteri,spellName)]
	[if(iIndex != -1): lPoteri = json.remove(LPoteri,iIndex)]
}]

[h: setPoteriMem(oToken,lPoteri)]