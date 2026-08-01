[h, if(argCount()>1), code:{
	[target = arg(0)]
	[iModMana = arg(1)]
	[if(argCount()>2): sMsgTag = arg(2); sMsgTag = ""]
}]

[macro("utility/modMinMax@this"): json.set("","target",target,"statToMod","Mana","maxStat","Mana_Max","modValue",iModMana)]
[macro("utility/annunciaModificaStat@this"): json.set("","target",target,"colore","blue","nome","Punti Mana","valore",macro.return,"msgTag",sMsgTag)]
[macro("utility/updateBars@this"):target]