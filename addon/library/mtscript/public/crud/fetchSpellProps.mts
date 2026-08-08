[h: spellId = arg(0)]

[h: jData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]
[h: macro.return = json.get(jData, spellId)]
