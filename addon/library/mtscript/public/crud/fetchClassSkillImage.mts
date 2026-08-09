[h: spellId = arg(0)]

[h: spellData = fetchClassSkillData(spellId)]
[h: image = json.get(spellData, "image")]
[h: macro.return = strformat("lib://it.aldinucci.piero.bed.maptool.ruleset/icons/spells/%{image}")]