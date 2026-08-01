[h, if(argCount()>1), code:{
	[target = arg(0)]
	[iModMana = arg(1)]
	[if(argCount()>2): sMsgTag = arg(2); sMsgTag = ""]
}]

[macro("modMinMax@Lib:MetodiVari"): json.set("","target",target,"statToMod","Mana","maxStat","Mana_Max","modValue",iModMana)]
[macro("annunciaModificaStat@Lib:MetodiVari"): json.set("","target",target,"colore","blue","nome","Punti Mana","valore",macro.return,"msgTag",sMsgTag)]
[macro("updateBars@Lib:MetodiVari"):target]