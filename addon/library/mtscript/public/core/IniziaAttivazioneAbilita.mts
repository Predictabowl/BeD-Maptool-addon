[h: source = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]

[h: switchToken(source)]

[h: sAbilitaTag = json.append(source,sAbilita)]

[macro("core/isAbilitaAttivabile@this"):sAbilitaTag]
[h: flag = macro.return]
[h, if(flag), code:{

	[macro("core/getAbilitaClasse@this"): sAbilitaTag]
	[h: oAbilitaPG = macro.return]
	[h: sClasse = json.get(oAbilitaPG,"Classe")]
	[macro("core/getStatsAbilita@this"): sAbilitaTag]
	[h: oBaseStats = macro.return]

	[iTempoBase = getStrProp(oBaseStats,"Tempo")]
	[h, if(iTempoBase == ""): iTempoBase = 0]

	[iTempoMod =  json.get(oAbilitaPG,"Tempo")]
	[h, if(iTempoMod == ""): iTempoMod = 0]

	[iTempo = iTempoBase + iTempoMod]

	[ if(iTempo > 0), code:{
		[attivaParam = json.set("","abilita",sAbilita)]
		[sMacro = "AttivaAbilita@"+getMacroLocation()]
		[param = json.set("","target",source,"source",source,"macro",sMacro,"macroParam",attivaParam,"tipo","Abilita","time",iTempo,"action",sAbilita)]
		[macro("IniziaAzione@Lib:TokenMacros"):param]
		[macro("getFluffName@"+sClasse):sAbilita]
		[broadcast(getName(source)+" inizia ad attivare <b>"+macro.return+"</b>",getPlayerName())]
	};{
		[macro("core/AttivaAbilita@this"): sAbilitaTag]
	}]

};{
	[broadcast("Abilit&agrave non attivabile in questo momento.",getPlayerName())]
}]
[h: macro.return = flag]
