[h: idToken = arg(0)]
[h: oOggetto = arg(1)]
[h: sAttributo = arg(2)]
[h: iValue = arg(3)]

[h: jComplex = json.get(oOggetto, "complex_attributes")]
[h, if(json.type(jComplex) != "OBJECT"): return(0,"")]
[h: jData = json.get(jComplex, sAttributo)]
[h, if(json.type(jData) != "OBJECT"): return(0,"")]
[h: sKey = json.get(jData, "key")]

[h, switch(sKey), code:
case "copertura": {
	[iDirection = json.get(jData, "direzione")]
	[sId = json.get(jData, "idCopertura")]
	[setCoperturaSlot(iValue/100, idToken, sId, iDirection)]
}]

[h: macro.return = ""]
