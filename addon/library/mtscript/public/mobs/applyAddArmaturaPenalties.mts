[h: oToken = arg(0)]
[h: oOggetto = arg(1)]
[h, if(argCount()>2): bRemove = arg(2); bRemove = 0]

[h, if(bRemove == 0): iMolt = 1; iMolt = -1]

[h: switchToken(oToken)]
[h, macro("mobs/calcAddArmaturaPenalties@this"): json.append(oToken, oOggetto)]
[h: Mod_Ingombro = Mod_Ingombro + json.get(macro.return, "modIngombro") * iMolt]
