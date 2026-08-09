[h: sRuna = arg(0)]


[h: jData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/items/runes.json")]
[h: macro.return = json.get(jData, sRuna)]