[h: oToken = macro.args]

[h: switchToken(oToken)]
[h: sArmiList = ""]
[h, foreach(key,Equipaggiamento), code:{
	[oItem = json.get(Equipaggiamento,key)]
	[if(json.get(oItem,"categoria") == "scudo"): sArmiList = listAppend(sArmiList,key)]
}]

[h: macro.return = sArmiList]