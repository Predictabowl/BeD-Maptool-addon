[h: oToken = arg(0)]
[h: iOggetto = arg(1)]

[macro("consumables/getSlotVeloci@this"): oToken]
[h: oGroup = macro.return]
[h, if(json.length(oGroup) > iOggetto): oOggetto = json.get(oGroup,iOggetto); oOggetto = -1]

[h: macro.return = oOggetto]