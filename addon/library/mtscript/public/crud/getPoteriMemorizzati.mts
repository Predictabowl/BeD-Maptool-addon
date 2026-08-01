[h: oToken = arg(0)]
[h, if(argCount() > 1): iClasse = arg(1); iClasse = 1]

[h, if(iClasse == 1): lPoteri = getProperty("Poteri_Mem",oToken); lPoteri = getProperty("Poteri_Mem_2",oToken)]
[h, if(json.type(lPoteri) != "ARRAY"): lPoteri = ""]

[h: macro.return = lPoteri]