[h: oToken = arg(0)]


[h: jNecrofuriaData = getDaMemoria(oToken, "Necrofuria-data")]
[h, if(json.type(jNecrofuriaData) != "OBJECT"): return(0,0)]
[h: bActive = json.get(jNecrofuriaData, "active")]
[h: macro.return = bActive == 1]