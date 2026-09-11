[h: oToken = arg(0)]
[h: oOggetto = arg(1)]

[h: iAdd = getAddestramentoArmatura(oOggetto)]

[h: switchToken(oToken)]
[h: iValue = max(iAdd - Add_Armature, 0)]
[h: jMods = json.set("", "modIngombro", 2*iValue)]
[h: return(0, jMods)]
