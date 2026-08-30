[h: tokenId = arg(0)]

[h, macro("mobs/getIdArmaEquip@this"): json.append(tokenId, 2)]
[h, if(macro.return == ""): w2 = 0; w2 = 1]



[h: lLMM = getProperty("LMM", tokenId)]
[h: listLen = countStrProp(lLMM)]
[h: aPowers = "[]"]

[h, for (i,0,listLen,1), code:{
	[h: key = indexKeyStrProp(lLMM,i)]
    [h: iLMM = getLMM(json.set("","source",tokenId,"scuola",key))]
    [h: iLL = getLL(json.set("","source",tokenId,"scuola",key,"arma",1))]
    [h: iCD = getSpellCD(json.set("","source",tokenId,"LM",iLMM,"arma",1))]
    [jPower = json.set("", "name", key, "LMM", iLMM, "LL1", iLL, "CD1", iCD)]
    [if(w2), code:{
        [h: iLL = getLL(json.set("","source",tokenId,"scuola",key,"arma",2))]
        [h: iCD = getSpellCD(json.set("","source",tokenId,"LM",iLMM,"arma",2))]
        [jPower = json.set(jPower, "LL2", iLL, "CD2", iCD)]
    }]
    [aPowers = json.append(aPowers, jPower)]
}]

[r: aPowers]
[h: macro.return = aPowers]