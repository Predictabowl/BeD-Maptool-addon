[h: tokenId = arg(0)]

[h: lPoteri =  getPoteriMem(tokenId)]
[h: aPPs = "[]"]
[h, foreach(spellId, lPoteri), code:{
    [h: iPP = getSpellPP(tokenId,spellId,0)]
    [h: macroParams = json.set("","source",tokenId,"spellName",spellId,"critRes",0)]
	[macro("powers/getMantPP@this"): macroParams]
    [jValue = json.set("", "spellId", spellId, "PP", iPP, "PP-mant", macro.return)]
    [aPPs = json.append(aPPs, jValue)]
}]

[h: return(0, aPPs)]