[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[h, macro("consumables/getInventarioConsumabili@this"): oToken]
[h: aConsumabili = macro.return]
[h, if(json.length(aConsumabili) > iOggetto): oOggetto = json.get(aConsumabili,iOggetto); oOggetto = -1]

[h: macro.return = oOggetto]