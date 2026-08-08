[h: spellName = arg(0)]


[h: aTags = upper(fetchSpellProp(spellName,"tags"))]
[h, if(listcontains(aTags, "POTERISPIRITICI")): return (0,1)]

[h: macro.return = 0]