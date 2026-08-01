[h: oToken = arg(0)]
[h: sTipo = upper(arg(1))]

[h: oCache = getDaCache(oToken,"SpellStats")]

[h, foreach(spellName, oCache), code:{
	[spellType = upper(getLibProperty("tipo",spellName))]
	[if(spellType == sTipo): oCache = json.remove(oCache, spellName)]
}]

[h: setInCache(oToken,"SpellStats", oCache)]
