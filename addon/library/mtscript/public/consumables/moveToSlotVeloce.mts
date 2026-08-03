[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[h: switchToken(oToken)]
[h: oOggetto = json.get(Consumabili,iOggetto)]
[h: Consumabili = json.remove(Consumabili,iOggetto)]
[h: addToSlotVeloce(oToken,oOggetto)]