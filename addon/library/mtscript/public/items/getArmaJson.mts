[h: sArma = arg(0)]

[macro("items/getItemsTable@this"): "arma"]
[h: oArma = json.get(macro.return,sArma)]
[h, if(json.type(oArma) != "OBJECT"): oArma = "{}"; oArma = json.set(oArma,"idDB",sArma)]

[h: macro.return = oArma]