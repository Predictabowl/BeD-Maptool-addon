[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[h: switchToken(oToken)]
[h: oOggetto = json.get(Consumabili, iOggetto)]
[h: oOggetto = json.set(oOggetto, "equipped", 0)]
[h: Consumabili = json.set(Consumabili, iOggetto, oOggetto)]
[h, macro("mobs/applyIngombroPenalties@this"): oToken]