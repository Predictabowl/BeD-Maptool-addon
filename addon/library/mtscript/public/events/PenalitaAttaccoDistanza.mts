[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: origine = json.get(macro.args,"origine")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: sTipo = json.get(eventParam,"tipo")]

[h, if(sTipo != "ATTACCO"): return(0,"")]
[h: sMsg = ""]

[h: iDistance = getDistance(target,0,source)]
[h, if(iDistance < 2), code:{
	[h: bSpalle = isAlleSpalle(source, target)]
	[h, if(!bSpalle), code:{
		[h: iMod = 20]
		[h: pushStatModifier(source,"Mancare",iMod)]
		[h: sMsg = strformat("<span style='font-weight:bold'>%+d</span> Mancare: Attacco bersaglio in mischia con arma da tiro",
			iMod)]
	}]
	[return(0, sMsg)]
}]

[h: jRange = json.set("","token",source,"distancePerCell",0,"upto",1)]
[h: aStates = json.append("","Atterrato")]
[h: jConditions = json.set("","range",jRange, "unsetStates",aStates)]
[h: aTokens = getTokens("json",jConditions)]
[h: bCover = 0]
[h, foreach(idToken,aTokens), code:{
	[macro("utility/isInLine@this"): json.append(source,idToken,target)]
	[if(macro.return): bCover = 1]
}]

[h, if(bCover), code:{
	[iMod = 25]
	[h: pushStatModifier(target,"Copertura",iMod/100)]
	[h: sMsg = strformat("<span style='font-weight:bold'>%+d</span> Copertura: Ostacolo sulla linea di tiro",
			iMod)]
}]

[h: macro.return = sMsg]
