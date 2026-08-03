[h: sOggetto = arg(0)]
[h: sCategoria = lower(arg(1))]

[macro("items/getItemsTable@this"): sCategoria]
[h: oOggetto = json.get(macro.return,sOggetto)]
[h: oOggetto = json.set(oOggetto,"categoria",sCategoria,"idDB",sOggetto)]
[h: macro.return = oOggetto]