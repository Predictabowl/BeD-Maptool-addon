[h, if(argCount()>1), code:{
	[target = arg(0)]
	[modFatica = arg(1)]
	[if(argCount()>2): sMsgTag = arg(2); sMsgTag = ""]
};{
	[macro.args = arg(0)]
	[h: target = json.get(macro.args,0)]
	[h: modFatica = json.get(macro.args,1)]
	[sMsgTag = ""]
}]

[macro("modMinMax@Lib:MetodiVari"): json.set("","target",target,"statToMod","PF","maxStat","PF_Max","modValue",modFatica)]
[macro("annunciaModificaStat@Lib:MetodiVari"): json.set("","target",target,"colore","orange","nome","Punti Fatica","valore",macro.return,"msgTag",sMsgTag)]
[macro("updateBars@Lib:MetodiVari"):target]