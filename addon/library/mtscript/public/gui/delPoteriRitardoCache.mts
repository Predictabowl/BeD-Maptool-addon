[h: oToken = arg(0)]

[h: oCache = getDaCache(oToken,"SpellStats")]

[h, foreach(spellName, oCache), code:{
	[iRecupero = getLibProperty("recupero",spellName)]
	[if(isNumber(iRecupero)), code:{
		[if(iRecupero > 0): oCache = json.remove(oCache, spellName)]
	}]
}]

[h: setInCache(oToken,"SpellStats", oCache)]
