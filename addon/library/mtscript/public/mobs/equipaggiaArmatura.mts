[h: oToken = json.get(macro.args,0)]
[h: sNomeA = json.get(macro.args,1)]

[h: switchToken(oToken)]

[h: oLocal = json.get(Equipaggiamento,sNomeA)]
[h, if(json.isEmpty(oLocal )): return (0,0)]

[h, if(Armatura == sNomeA): return(0,0)]

[h, if(Armatura != ""), code:{
	[macro("mobs/riponiArmatura@this"): oToken]
}]

[macro("items/getArmaturaFromDB@this"): json.get(oLocal,"idDB")]
[h: oArmatura = json.merge(macro.return,oLocal)]

[macro("items/processaAttributi@this"): json.append(oToken,oArmatura)]
[macro("mobs/applyAddArmaturaPenalties@this"): json.append(oToken,oArmatura)]

[h: Armatura = sNomeA]