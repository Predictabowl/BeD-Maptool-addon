[h: oToken = arg(0)]
[h: oOggetto = arg(1)]

[h: switchToken(oToken)]
[h: oGroup = getDaMemoria(oToken,"SlotVeloci")]
[h, if(json.type(oGroup) != "ARRAY"): oGroup = ""]
[h: oGroup = json.append(oGroup,oOggetto)]
[h: setInMemoria(oToken,"SlotVeloci",oGroup)]
[h, macro("mobs/applyIngombroPenalties@this"): oToken]