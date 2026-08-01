[h: sCopId = arg(0)]
[h: bActive = arg(0)]

[h: tMapVar = findToken("MapVar")]

[h, if(!json.contains(Coperture, sCopId)): return(0, "")]
[h: jCop = json.get(Coperture, sCopId)]
[h: jCop = json.set(jCop, "attiva", bActive)]
[h: Coperture = json.set(Coperture, sCopId, jCop)]