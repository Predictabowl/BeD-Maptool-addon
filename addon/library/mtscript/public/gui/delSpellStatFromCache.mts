[h: oToken = arg(0)]
[h: spellId = arg(1)]

[h: oCache = getDaCache(oToken,"SpellStats")]
[h, if(json.type(oCache) != "OBJECT"): oCache="{}"]
[h: oCache = json.remove(oCache, spellId)]
[h: setInCache(oToken,"SpellStats", oCache)]
