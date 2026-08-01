[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: sAbilita = json.get(macro.args,"abilita")]
};{
	[h: source = json.get(macro.args,0)]
	[h: sAbilita = json.get(macro.args,1)]
}]

[h: switchToken(source)]

[h: sAbilitaTag = json.append(source,sAbilita)]

[h: bReturn = 1]

[macro("core/isAbilitaAttivabile@this"):sAbilitaTag]
[h: bFlag= macro.return]
[h, if(bFlag), code:{

	[macro("core/getAbilitaClasse@this"):sAbilitaTag]
	[h: oAbilitaPG = macro.return]
	[h: sClasse = json.get(oAbilitaPG,"Classe")]
	[macro("core/getStatsAbilita@this"): sAbilitaTag]
	[h: oBaseStats = macro.return]

	[h: iPFBase = getStrProp(oBaseStats,"PF")]
	[h, if(iPFBase == ""): iPFBase = 0]
	[h: iPABase = getStrProp(oBaseStats,"PA")]
	[h, if(iPABase == ""): iPABase = 0]
	[h: iPMBase = getStrProp(oBaseStats,"PM")]	
	[h, if(iPMBase == ""): iPMBase = 0]

	[h: iPFMod =  json.get(oAbilitaPG,"PF")]
	[h, if(iPFMod == ""): iPFMod = 0]
	[h: iPAMod =  json.get(oAbilitaPG,"PA")]
	[h, if(iPAMod == ""): iPAMod = 0]
	[h: iPMMod =  json.get(oAbilitaPG,"PM")]
	[h, if(iPMMod == ""): iPMMod = 0]

	[h: iPF = iPFBase +iPFMod]
	[h: iPA = iPABase +iPAMod]
	[h: iPM = iPMBase +iPMMod]

	[h: actionCost = json.append(source,iPA,iPF,iPM,0)]
	[macro("core/payAction@this"): actionCost]
	[h: bFlag = macro.return]

	[h, if(bFlag), code:{
		[macro("core/setAbilitaInUso@this"): sAbilitaTag]
		[h: sActivator = "Attiva"+sAbilita+"@"+sClasse]
		[macro(sActivator):source]
		[h: returnStr = macro.return]
		[h: sNomeAb = getStrProp(oBaseStats,"nome")]
		[h: im = getImage(sClasse)]
		[h: msg = "<br><img src='"+ im+"' width='25' height='25' /> "]
		[h: msg = strformat("%{msg} Abilit&agrave;: <b> %{sNomeAb} </b> %{returnStr}")]
		[broadcast(msg,getPlayerName())]
		[bReturn = 0]
	}]
};{
	[broadcast("Limite massimo di abilit&agrave di questo tipo raggiunto.",getPlayerName())]
}]
[h: macro.return = bReturn]
