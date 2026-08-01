[h: spellName = getName(arg(0))]
[h: sTag = upper(arg(1))]
[h, if(argCount()>2): source = arg(2); source = ""]

[h: sTagList = getLibProperty("tags",spellName)]
[h, if(listContains(sTagList,sTag)): bFlag = 1; bFlag = 0]

[h: macro.return = bFlag]