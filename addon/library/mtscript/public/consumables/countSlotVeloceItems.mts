[h: oToken = arg(0)]

[h, macro("consumables/getInventarioConsumabili@this"): oToken]
[h: aConsumabili = macro.return]
[h: count = 0]
[h, foreach(oCons, aConsumabili), code:{
    [if(json.get(oCons, "equipped") == 1): count = count +1]
}]

[h: macro.return = count]