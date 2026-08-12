[h: allConsumables = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/consumables.json")]

[h: aTypes = json.path.read(allConsumables, ".*.properties.tipo_oggetto")]
[h: macro.return = json.unique(aTypes)]
