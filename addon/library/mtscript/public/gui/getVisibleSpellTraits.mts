[h: spellName = arg(0)]

[h: sTags = upper(fetchSpellProp(spellName,"tags"))]
[h: aTratti = ""]
[h: jPowerTraits = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/powerTraits.json")]
[h, foreach(sTag, sTags), code:{
    [jTrait = json.get(jPowerTraits, sTag)]
    [if(!json.isEmpty(jTrait)), code:{
        [jTrait = json.set(jTrait, "id", sTag)]
        [aTratti = json.append(aTratti, jTrait)]
    }]
}]

[h: return(0, aTratti)]