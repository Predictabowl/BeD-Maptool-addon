[h: sToken = arg(0)]
[h: iLiv = arg(1)]
[h: sTable = arg(2)]

[h: aPoteri = "[]"]
[macro("mechanics/getSummonMemTable@this"): json.append(sToken, sTable)]
[h, foreach(oPotere, macro.return), code:{
	[oPotLiv = json.get(oPotere, "livello")]
	[if(json.type(oPotLiv) == "ARRAY"): iPotLiv = json.get(oPotLiv, 0); iPotLiv = ""]
	[if(!isNumber(iPotLiv)): iPotLiv = 0]
	[if(iPotLiv <= iLiv): aPoteri = json.append(aPoteri, oPotere)]
}]

[h: macro.return = aPoteri]