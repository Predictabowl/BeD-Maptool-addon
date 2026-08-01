[h: oToken = arg(0)]
[h: sNomeAb = arg(1)]

[h: oData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, if(json.type(oData) != "OBJECT"): return(0,0)]
[h: iValue = json.get(oData, sNomeAb)]
[h, if(!isNumber(iValue)): iValue = 0]

[h: macro.return = iValue]