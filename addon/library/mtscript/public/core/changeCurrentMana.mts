[h, if(argCount()>1), code:{
	[target = arg(0)]
	[iModMana = arg(1)]
	[if(argCount()>2): sMsgTag = arg(2); sMsgTag = ""]
}]

[h: switchToken(target)]
[h: iNewMana = min(getManaMax(target), max(0, Mana + iModMana))]
[h: iOffSet = iNewMana - Mana]
[h: Mana = iNewMana]
[macro("utility/annunciaModificaStat@this"): json.set("","target",target,"colore","blue","nome","Punti Mana","valore",iOffSet,"msgTag",sMsgTag)]
[macro("utility/updateBars@this"):target]