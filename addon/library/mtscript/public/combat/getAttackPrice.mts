[h: source = json.get(macro.args,"source")]
[h: tipo = json.get(macro.args,"tipo")]
[h: arma = json.get(macro.args,"arma")]
[h: bOpp = json.get(macro.args,"opportunita")]
[h: switchToken(source)]

[macro("combat/getCostoPA@this"): macro.args]
[h: costo_PA = macro.return]
[h, if(costo_PA=="-"): costo_PA=0]

[h: iPf = 0]
[macro("combat/hasAttacks@this"): json.set("","source",source,"onlyBasic",1,"opportunita",bOpp)]
[h, if(macro.return == 0): iPF = 3]

[h: result = json.set("","token",source,"PA",costo_PA,"PF",iPF)]
[h: macro.return = result]