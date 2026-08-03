[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[h: switchToken(oToken)]
[h: oGroup = getDaMemoria(oToken,"SlotVeloci")]
[h, if(json.type(oGroup) != "ARRAY"): oGroup = ""]
[h: oGroup = json.remove(oGroup,iOggetto)]
[h: setInMemoria(oToken,"SlotVeloci",oGroup)]
[h, macro("mobs/applyIngombroPenalties@this"): oToken]