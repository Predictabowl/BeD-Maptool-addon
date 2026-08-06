[h: spellId = arg(0)]
[h: key = arg(1)]

[h: data = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]
[h: spellData = json.get(data, spellId)]
[h: aExternal = json.append("name", "description")]
[h, if(json.contains(aExternal, key)), code:{
    [value = json.get(spellData, key)]
    [return(0, value)]
}]

[h: props = json.get(spellData, "properties")]
[h: macro.return = json.get(props, key)]