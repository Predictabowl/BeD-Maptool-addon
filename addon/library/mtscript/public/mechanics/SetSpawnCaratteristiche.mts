[h: tokenId = arg(0)]

[h: iLiv = getProperty("Livello", tokenId)]
[h, macro("mechanics/getSummonTableByLevel@this"): json.append(tokenId, iLiv, "summon-poteri-table")]

[h: aCaratt = getDaMemoria(tokenId, "caratteristiche-table")]
[h, foreach(oCaratt, aCaratt), code:{
    [sProp = json.get(oCaratt, "prop")]
    [iValue = eval(json.get(oCaratt, "value"))]
    [setProperty(sProp, iValue, tokenId)]
}]