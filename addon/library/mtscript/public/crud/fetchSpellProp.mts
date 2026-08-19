[h: spellId = arg(0)]
[h: key = lower(arg(1))]

[h: aExternal = json.append("nome_decorativo", "descrizione", "flavour", "property_type")]
[h, if(json.contains(aExternal, key)): path = strformat("%{spellId}.%{key}");  path = strformat("%{spellId}.properties.%{key}")]

[h: jData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]
[h: value = json.path.read(jData, path, "SUPPRESS_EXCEPTIONS")]
[h, if(value != "null"): return(0, value)]

[h: jData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/consumables.json")]
[h: macro.return = json.path.read(jData, path, "SUPPRESS_EXCEPTIONS")]	