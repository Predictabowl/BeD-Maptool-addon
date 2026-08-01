[h: sToken = arg(0)]
[h: sKey = arg(1)]

[h: sLabel = "AbilitaClasse"]

[h: oMem = getDaMemoria(sToken, sLabel)]
[h, if(json.type(oMem) != "OBJECT"): oMem = "{}"]
[h: oMem = json.remove(oMem, sKey)]
[h: setInMemoria(sToken, sLabel, oMem)]