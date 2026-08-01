[h: sToken = arg(0)]

[h: oRiposo = getDaMemoria(sToken, "riposoBreve")]
[h, if(json.isEmpty(oRiposo)): return(0, 3)]
[h: iRiposo = json.get(oRiposo, "rimanenti")]
[h, if(isNumber(iRiposo)): return(0, iRiposo)]
[h: macro.return = 3]