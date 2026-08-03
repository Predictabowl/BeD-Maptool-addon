[h: sArma = arg(0)]

[macro("items/getItemsTable@this"): "armatura"]
[h: oArma = json.get(macro.return,sArma)]
[h: oArma = json.set(oArma,"categoria","armatura","idDB",sArma)]

[h: macro.return = oArma]