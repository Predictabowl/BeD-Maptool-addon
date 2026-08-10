[h: school = arg(0)]
[h: allSpells = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]

[h: path = strformat(".*[?(@.properties.scuola == '%{school}')]['id','nome_decorativo']")]
[h: macro.return = json.path.read(allSpells, path)]
