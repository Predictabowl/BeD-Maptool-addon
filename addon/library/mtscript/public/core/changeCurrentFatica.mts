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

[h: switchToken(target)]
[h: iNewPF = min(getPFMax(target), max(0, PF + modFatica))]
[h: iOffSet = iNewPF - PF]
[h: PF = iNewPF]
[macro("utility/annunciaModificaStat@this"): json.set("","target",target,"colore","orange","nome","Punti Fatica","valore",iOffSet,"msgTag",sMsgTag)]
[macro("utility/updateBars@this"):target]