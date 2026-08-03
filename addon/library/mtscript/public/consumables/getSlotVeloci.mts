[h: oToken = arg(0)]

[h: aSlots = getDaMemoria(oToken,"SlotVeloci")]
[h, if(json.type(aSlots) != "ARRAY"): aSlots = "[]"]

[h: macro.return = aSlots]