[h: spellId = arg(0)]

[h: data = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]
[h: spellData = json.get(data, spellId)]
[h: image = json.get(spellData, "image")]
[h: macro.return = strformat("lib://it.aldinucci.piero.bed.maptool.ruleset/icons/spells/%{image}")]