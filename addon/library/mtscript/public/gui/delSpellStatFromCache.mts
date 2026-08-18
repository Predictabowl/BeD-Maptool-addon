[h: oToken = arg(0)]
[h: spellId = upper(arg(1))]

[h: oCache = getDaCache(oToken,"SpellStats")]
[h: oCache = json.remove(oCache, spellId)]
[h: setInCache(oToken,"SpellStats", oCache)]
