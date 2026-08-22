[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[h: switchToken(oToken)]
[h: Consumabili = json.remove(Consumabili, iOggetto)]
[h, macro("mobs/applyIngombroPenalties@this"): oToken]