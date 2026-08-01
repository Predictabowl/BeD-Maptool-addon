[h: sToken = arg(0)]
[h: sKey = arg(1)]
[h: oValue = arg(2)]
[h: sLabel = "AbilitaClasse"]

[h: oMem = getDaMemoria(sToken, sLabel)]
[h: oMem = json.set(oMem, sKey, oValue)]
[h: setInMemoria(sToken, sLabel, oMem)]