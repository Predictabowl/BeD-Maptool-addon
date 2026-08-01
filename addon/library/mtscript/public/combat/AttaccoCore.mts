[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: arma = json.get(macro.args,"arma")]
[h: bIsHit = json.get(macro.args,"HITRESULT")]
[h: bOpp =  json.get(macro.args,"opportunita")]

[h, if (arma ==""), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma=macro.return]
}]
[h, if(isNumber(bOpp) == 0): bOpp = 0]
[oEventParam = json.set("","tipo","ATTACCO","arma",arma, "isOpp", bOpp)]

[h: switchToken(source)]

[h: image = getImage(getName(source))]
[h: startMsg = "<img src='"+image+"' width='35' height='35' > </img> "+getName(source)+" infligge un Attacco "]

[h, if(bOpp == 1), code:{
	[h: startMsg = startMsg+"di Opportunit&agrave; "]
	[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Opportunita","eventParam",oEventParam)]
	[bSpalle = 1]
};{
	[bSpalle = isAlleSpalle(source,target,bOpp)]
}]

[h, if(bOpp != 1 && bSpalle): startMsg = startMsg+"alle spalle "]

[h: image = getImage(getName(target))]
[h: startMsg = startMsg+ "a <img src='"+ image+"' width='35' height='35' /> "+getName(target)+": "]
[h: setMessaggio(source,"headingAttacco",startMsg)]

[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Attack","eventParam",oEventParam)]
[macro("events/runEvents@this"): json.set("","source",target,"target",source,"event","On_Attacked","eventParam",oEventParam)]

[macro("combat/calcCombatValues@this"): json.set("","source",source,"target",target,"arma",arma,"opportunita",bOpp)]
[h: combatParam = macro.return]


[h, if(isNumber(bIsHit) == 0), code:{
	[macro("combat/isHit@this"): json.set("","source",source,"target",target,"opportunita",bOpp)]
	[bIsHit = macro.return]
}]

[h, if(bIsHit == 1), code:{
	[macro("combat/getUltimoCritico@this"):source]
	[critRes = macro.return]
	[macro("combat/getUltimaDifesa@this"): source]
	[difesa = macro.return]

	[macro("combat/getPhysDmg@this"):json.set(combatParam,"source",source,"target",target,"arma",arma,"critRes",critRes,"opportunita",bOpp)]
	[iDanno = macro.return]

	[macro("events/runEvents@this"):json.set("","event","On_Hit","source",source,"target",target,"eventParam",oEventParam)]
	[macro("events/runEvents@this"):json.set("","event","On_Hitted","source",target,"target",source,"eventParam",oEventParam)]

	[h: param = json.set("","source",source,"target",target,"danno",iDanno,"difesa",difesa)]
	[macro("combat/DanniDifesaFisica@this"): param]
	[h: iDanno = macro.return]
	
	[if (critRes == 1), code:{
		[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Critical","eventParam",oEventParam)]
	}]

	[macro("core/DannoTarget@this"): json.set("","target",target,"valore",iDanno,"source",source,"verbose",0)]

}]

[macro("combat/generaAttackMsg@this"): json.append(source,target)]
[h: appendMessaggio(source,"endOfActionMsg",macro.return)]

[h, if(bOpp == 1), code:{
	[macro("mobs/addOpportunitaUsed@this"): json.append(source,target)]
}]

