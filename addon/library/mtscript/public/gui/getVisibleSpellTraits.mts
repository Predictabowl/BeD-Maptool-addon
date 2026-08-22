[h: spellName = arg(0)]

[h: sTags = upper(fetchSpellProp(spellName,"tags"))]
[h: lTratti = ""]
[h, if(listContains(sTags, "AGGRESSIONE")): lTratti = listAppend(lTratti, "Aggressione")]
[h, if(listContains(sTags, "ARMATURA")): lTratti = listAppend(lTratti, "Armatura")]
[h, if(listContains(sTags, "CONTROLLATO")): lTratti = listAppend(lTratti, "Controllato")]
[h, if(listContains(sTags, "RISOLUTO")): lTratti = listAppend(lTratti, "Risoluto")]
[h, if(listContains(sTags, "SANGUINAMENTO")): lTratti = listAppend(lTratti, "Sanguinamento")]
[h, if(listContains(sTags, "VELENO")): lTratti = listAppend(lTratti, "Veleno")]

[h: macro.return = lTratti]