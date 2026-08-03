[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: oGroup = getDaMemoria(oToken,"SlotVeloci")]
[h, if(json.type(oGroup) != "ARRAY"): oGroup = "[]"]

[h: macro.return = json.length(oGroup)]