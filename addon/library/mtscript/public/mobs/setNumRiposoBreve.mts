[h: sToken = arg(0)]
[h: iVal = arg(1)]

[h: oRiposo = getDaMemoria(sToken, "riposoBreve")]
[h, if(json.type(oRiposo) != "OBJECT"): oRiposo = "{}"]
[h: oRiposo = json.set(oRiposo, "rimanenti", iVal)]
[h: setInMemoria(sToken, "riposoBreve", oRiposo)]
[h: macro.return = 1]