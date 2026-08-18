[h: spellId = arg(0)]
[h: key = lower(arg(1))]

[h: spellData = fetchSpellData(spellId, key)]
[h, if(json.isEmpty(spellData)): spellData = fetchConsumableData(spellId, key)]

[h: aExternal = json.append("nome_decorativo", "descrizione", "flavour")]
[h, if(json.contains(aExternal, key)), code:{
    [value = json.get(spellData, key)]
    [return(0, value)]
}]

[h: props = json.get(spellData, "properties")]
[h: macro.return = json.get(props, key)]
