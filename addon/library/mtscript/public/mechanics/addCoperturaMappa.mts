[h: sName = arg(0)]
[h: sDrawId = arg(1)]
[h: nValue = arg(2)]

[h: tMapVar = findToken("MapVar")]
[h: switchToken(tMapVar)]

[h, if(math.isInt(nValue)): fValue = nValue/100; fValue = nValue]

[h: jCopertura = json.set("","drawId", sDrawId,"value", fValue)]
[h: Coperture = json.set(Coperture, sName, jCopertura)]