[h: spellId = arg(0)]

[h: jData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/consumables/comsumables.json")]
[h: macro.return = json.get(jData, spellId)]
