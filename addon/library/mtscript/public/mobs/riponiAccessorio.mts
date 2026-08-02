[h: oToken = arg(0)]
[h: sCat = arg(1)]
[h, if(argCount()>2): iSlot = arg(2); iSlot = 1]
[h, if(iSlot != 1 && iSlot != 2): iSlot = 1]

[h: sSlot = sCat]
[h, if(sCat == "anello"): sSlot = sSlot+iSlot]

[h: switchToken(oToken)]

[h: sKey = json.get(Accessori,sSlot)]
[h, if(sKey == ""): return (0,0)]

[h: oAcc = json.get(Equipaggiamento,sKey)]
[h, if(json.isEmpty(oAcc)): return(0,0)]

[h: idDB = json.get(oAcc,"idDB")]
[h: sCat = json.get(oAcc,"categoria")]

[macro("mobs/getAccessorio@this"): json.append(oToken, sKey)]
[h: oOggetto = macro.return]

[h, if(!json.isEmpty(oOggetto)), code:{
	[macro("items/processaAttributi@this"): json.append(oToken,oOggetto,-1)]
}]

[h: Accessori = json.remove(Accessori,sSlot)]