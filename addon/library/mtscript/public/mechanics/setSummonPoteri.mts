[h: sToken = arg(0)]

[h: iLiv = getProperty("Livello", sToken)]
[h, macro("mechanics/getSummonTableByLevel@this"): json.append(sToken, iLiv, "summon-poteri-table")]
[h: aPoteri = macro.return]
[h, if(json.isEmpty(aPoteri)): return(0, "")]
[h: setPoteriMem(sToken, aPoteri)]