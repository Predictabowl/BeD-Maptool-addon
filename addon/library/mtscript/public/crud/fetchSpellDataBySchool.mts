[h: school = arg(0)]
[h: allSpells = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]

[h: path = strformat(".[?(@.properties.scuola = '%{school}')]")]
[h: broadcast(path)]
[h: macro.return = json.path.read(allSpells, path)]
