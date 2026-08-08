[h: spellId = arg(0)]
[h: key = lower(arg(1))]

[h: data = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/consumables/comsumables.json")]
[h: spellData = json.get(data, spellId)]
[h, if(json.isEmpty(spellData)): return(fetchSpellProp(spellId, key))]

[h: aExternal = json.append("nome_decorativo", "descrizione")]
[h, if(json.contains(aExternal, key)), code:{
    [value = json.get(spellData, key)]
    [return(0, value)]
}]

[h: props = json.get(spellData, "properties")]
[h: macro.return = json.get(props, key)]