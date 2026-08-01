[h: oToken = arg(0)]
[h: sCat = lower(arg(1))]
[h, if(argCount()>2): iSlot = arg(2); iSlot = 1]
[h, if(iSlot != 1 && iSlot != 2): iSlot = 1]

[h: switchToken(oToken)]
[h: sSlot = sCat]
[h, if(sCat == "anello"): sSlot = sSlot+iSlot]

[h: sKey = json.get(Accessori,sSlot)]
[h, if(sKey == ""): return(0,"{}")]

[h: oLocal = json.get(Equipaggiamento,sKey)]
[h, if(json.isEmpty(oLocal)): return(0,"{}")]

[macro("mobs/getAccessorio@this"): json.append(oToken, sKey)]
