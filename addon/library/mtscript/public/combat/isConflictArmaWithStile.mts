[h: tokenId = arg(0)]
[h: stileId = arg(1)]
[h, if(argCount()>2): iArma = arg(2); iArma = 1]

[h: oArma = getArma(tokenId,iArma)]
[h, if(json.isEmpty(oArma)): return(0,0)]
[h: jStili = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/stili.json")]
[h: jStile = json.get(jStili, stileId)]

[h, macro("items/getArmaHandTypes@this"): oArma]
[h: aHandTypes = macro.return]

[h, if(iArma == 1): sTypesProp = "hand1Types"; sTypesProp = "hand2Types"]
[h: aAllowedTypes = json.get(jStile, sTypesProp)]
[h: aFinalTypes = json.intersection(aAllowedTypes, aHandTypes)]

[h: macro.return = json.isEmpty(aFinalTypes)]