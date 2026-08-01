[h: sToken = arg(0)]
[h: sTalento = arg(1)]

[h: jTalenti = getDaMemoria(sToken,"Dati-Talenti")]
[h, if(json.type(jTalenti) != "OBJECT"): return(0, "")]
[h: macro.return = json.get(jTalenti, sTalento)]