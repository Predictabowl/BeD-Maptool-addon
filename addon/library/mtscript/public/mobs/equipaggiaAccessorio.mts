[h: oToken = arg(0)]
[h: sNomeA = arg(1)]
[h, if(argCount()>2): iSlot = arg(2); iSlot = 1]

[h, if(iSlot != 1 && iSlot != 2): iSlot = 1]

[h: switchToken(oToken)]

[h, if(json.type(Accessori) != "OBJECT"): Accessori = "{}"]

[h: oLocalA = json.get(Equipaggiamento,sNomeA)]
[h: idDB = json.get(oLocalA,"idDB")]
[h: sCat = json.get(oLocalA,"categoria")]

[h, if(sCat == "anello"), code:{
	[sSlot = sCat+iSlot]
};{
	[sSlot = sCat]
}]

[h: sKey = json.get(Accessori,sSlot)]
[h, if(sKey == sNomeA): return(0,0)]
[h, if(sKey != ""), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,sCat,iSlot)]
}]

[macro("mobs/getAccessorio@this"): json.append(oToken, sNomeA)]
[h: oOggetto = macro.return]

[h, if(!json.isEmpty(oOggetto)), code:{
	[macro("items/processaAttributi@this"): json.append(oToken,oOggetto)]
}]

[h: Accessori = json.set(Accessori,sSlot,sNomeA)]