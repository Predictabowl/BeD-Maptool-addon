[h: spellId = arg(0)]
[h: key = lower(arg(1))]

[h: spellData = fetchClassSkillData(spellId, key)]
<!-- TODO eventually fetch passive skill data? -->

[h: aExternal = json.append("nome_decorativo", "descrizione")]
[h, if(json.contains(aExternal, key)), code:{
    [value = json.get(spellData, key)]
    [return(0, value)]
}]

[h, if(!json.contains(spellData,"properties")): return(0,"")]
[h: props = json.get(spellData, "properties")]
[h: macro.return = json.get(props, key)]
