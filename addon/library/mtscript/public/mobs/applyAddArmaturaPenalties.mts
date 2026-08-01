[h: oToken = arg(0)]
[h: oOggetto = arg(1)]
[h, if(argCount()>2): bRemove = arg(2); bRemove = 0]

[h, if(bRemove == 0): iMolt = 1; iMolt = -1]

[h: iAdd = getAddestramentoArmatura(oOggetto)]
[h: switchToken(oToken)]

[h: iValue = max(iAdd - Add_Armature, 0)]


[h: Mod_Ingombro = Mod_Ingombro + (2*iValue*iMolt)]
