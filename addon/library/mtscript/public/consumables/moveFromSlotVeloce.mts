[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[h: switchToken(oToken)]
[h: oOggetto = getFromSlotVeloce(oToken,iOggetto)]
[h: removeFromSlotVeloce(oToken,iOggetto)]
[h: Consumabili = json.append(Consumabili,oOggetto)]