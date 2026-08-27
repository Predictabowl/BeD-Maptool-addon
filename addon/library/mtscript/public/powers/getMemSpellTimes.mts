[h: tokenId = arg(0)]

[h: lPoteri =  getPoteriMem(tokenId)]
[h: aTimes = "[]"]
[h, foreach(spellId, lPoteri), code:{
    [iTempo = getSpellTime(json.set("","source",tokenId,"spellName",spellId,"critRes",0))]
    [aTimes = json.append(aTimes, json.set("", "spellId", spellId, "tempo", iTempo))]
}]

[h: return(0, aTimes)]