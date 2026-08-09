[h: spellId = arg(0)]

[h: spellData = fetchSpellData(spellId)]
[h, if(json.isEmpty(spellData)): spellData = fetchConsumableData(spellId)]
[h: image = json.get(spellData, "image")]
[h: macro.return = strformat("lib://it.aldinucci.piero.bed.maptool.ruleset/icons/spells/%{image}")]