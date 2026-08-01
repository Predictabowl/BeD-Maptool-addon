[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h: sWarn = "<span style='color: green; font-weight:bold;'>ATTENZIONE:</span>&nbsp;"]

[h: sSpellSchool = getLibProperty("scuola",spellName)]
[h: spellType = upper(getLibProperty("tipo",spellName))]
[h, if(spellType == "OFFENSIVO"), code:{
	[macro("combat/hasAttacks@this"): json.set("","source",source)]
	[if(macro.return != 1), code:{
		[broadcast(sWarn+getName(source) + " Non ha attacchi a disposizione",getPlayerName())]
		[return(0,0)]
	}]
}]

[h: bTempBlock = getSpellStartData(source,"spellBlock")]
[macro("core/getOverride@this"):json.append(source,"SpellBlock")]
[h, if(macro.return > 0 || bTempBlock == 1), code:{
	[broadcast(sWarn+"Il potere è stato bloccato",getPlayerName())]
	[return(0,0)]
}]

[h: lSpellTags = upper(getLibProperty("tags",spellName))]
[h: bStileDistanza = isStileDistanza(source)]
[h, if(listContains(lSpellTags,"MISCHIA") && bStileDistanza), code:{
	[broadcast(sWarn+"Questo potere può essere utilizzato solo in mischia",getPlayerName())]
	[return(0,0)]
}]

[h, if(listContains(lSpellTags,"DISTANZA") && !bStileDistanza), code:{
	[broadcast(sWarn+"Questo potere può essere utilizzato solo a distanza",getPlayerName())]
	[return(0,0)]
}]

[h, if(listContains(lSpellTags,"LANCIO") && !isArmaLancioEquipped(source)), code:{
	[broadcast(sWarn+"Questo potere può essere utilizzato solo con un'arma da lancio",getPlayerName())]
	[return(0,0)]
}]

[h: bStileScudo = isStileAS(source)]
[h, if(listContains(lSpellTags,"STILEAS") && !bStileScudo), code:{
	[broadcast(sWarn+"Questo potere può essere utilizzato solo con stile Arma e Scudo",getPlayerName())]
	[return(0,0)]
}]

[h: param = json.set("","source",source,"spell",spellName)]
[h, if(getLMM(param) < 0), code:{
	[broadcast(sWarn+"Non puoi lanciare poteri di questa scuola",getPlayerName())]
	[return(0,0)]
}]

[h: macro.return = 1]

