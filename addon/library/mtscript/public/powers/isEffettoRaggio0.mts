[h:broadcast(strformat("Macro Deprecata: %s@%s",getMacroName(),getMacroLocation()))]
[h: oSource = arg(0)]
[h: spellName = arg(1)]

[h: iSpellRange = getSpellRange(macro.args)]
[h: spellTags = getLibProperty("tags",spellName)]


[h, if(iSpellRange==0 || listContains(spellTags,"SELFTARGET")): bReturn = 1; bReturn = 0]

[h: macro.return = bReturn]