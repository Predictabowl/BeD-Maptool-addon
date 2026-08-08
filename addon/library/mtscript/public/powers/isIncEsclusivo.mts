[h: spellName = arg(0)]

[h: lTags = upper(fetchSpellProp(spellName,"tags"))]

[h: iCount = listContains(lTags,"ESCLUSIVO")]

[h: macro.return = (iCount > 0)]