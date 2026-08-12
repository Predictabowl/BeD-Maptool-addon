[h: type = arg(0)]
[h: allConsumables = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/consumables.json")]

[h: path = strformat(".*[?(@.properties.tipo_oggetto == '%{type}')]['id','nome_decorativo']")]
[h: macro.return = json.path.read(allConsumables, path)]
