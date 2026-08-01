[h: sToken = arg(0)]
[h: sTable = arg(1)]

[h: aPoteri = getDaMemoria(sToken, sTable)]
[h, if(json.type(aPoteri) != "ARRAY"): aPoteri = "[]"]
[h: macro.return = aPoteri]