[h: sName = arg(0)]

[h: tMapVar = findToken("MapVar")]
[h: switchToken(tMapVar)]

[h: Coperture = json.remove(Coperture, sName)]