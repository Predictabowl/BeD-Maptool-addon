[h: sArma = arg(0)]

[macro("items/getItemsTable@this"): "scudo"]
[h: oScudo = json.get(macro.return,sArma)]
[h: oScudo = json.set(oScudo,"categoria","scudo")]
[h: macro.return = oScudo]