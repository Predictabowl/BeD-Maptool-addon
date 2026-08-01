[h: source = json.get(macro.args,0)]

[macro("core/getAbilitaInUso@this"): source]
[h: abList = macro.return]
[h: bFlag = 0]
[h, foreach(item, abList), code:{
	[macro("core/getStatsAbilita@this"): json.append(source,item)]
	[abDurata = upper(getStrProp(macro.return,"durata"))]
	[if(abDurata == "COLPOSINGOLO"), code:{
		[macro("core/DisattivaAbilita@this"): json.append(source,item)]
		[bFlag = 1]
	}]
}]

[h, if(bFlag), code:{
	[macro("gui/updateFrameAzioni@this"): source]
}]