[h: oToken = arg(0)]
[h: sId = arg(1)]

[h: switchToken(oToken)]
[h: oLocal = json.get(Equipaggiamento,sId)]
[h, if(oLocal == ""): return(0,0)]

[h: sCat = json.get(oLocal,"categoria")]

[if (Armatura == sId): return(0,1)]
[h, if(sId == Scudo_Equipaggiato): return(0,1)]

[macro("mobs/getIdArmaEquip@this"): json.append(oToken,1)]
[h, if (macro.return == sId): return(0,1)]
[macro("mobs/getIdArmaEquip@this"): json.append(oToken,2)]
[h, if (macro.return == sId): return(0,1)]


[h, if(sCat == "anello"), code:{
	[sKey = json.get(Accessori,"anello1")]
	[if(sKey == sId): return(0,1)]
	[sKey = json.get(Accessori,"anello2")]
	[if(sKey == sId): return(0,1); return(0,0)]
}]


[h: sKey = json.get(Accessori,sCat)]
[h, if(sKey == sId): return(0,1)]


[h: macro.return = 0]