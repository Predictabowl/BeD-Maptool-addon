[h: spellName = arg(0)]

[h: lTags = upper(getLibProperty("tags", spellName))]

[h: iCount = listContains(lTags,"ESCLUSIVO")]

[h: macro.return = (iCount > 0)]