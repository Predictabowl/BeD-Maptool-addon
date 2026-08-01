[h: spellName = arg(0)]


[h: aTags = upper(getLibProperty("tags",spellName))]
[h, if(listcontains(aTags, "POTERISPIRITICI")): return (0,1)]

[h: macro.return = 0]