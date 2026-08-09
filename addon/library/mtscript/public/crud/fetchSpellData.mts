[h: spellId = arg(0)]

[h, if(json.type(spellId) == "OBJECT"), code:{
    [namespace = json.get(spellId, "namespace")]
    [spellId =  json.get(spellId, "id")]
};{
    [namespace = "it.aldinucci.piero.bed.maptool.ruleset"]
}]
[h: jData = data.getStaticData(namespace, "public/db/spells/spells.json")]
[h: macro.return = json.get(jData, spellId)]
