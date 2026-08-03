[h: source = arg(0)]
[h: sItemName = arg(1)]
[h: oUseParam = arg(2)]

[h: sWarn = "<span style='color: green; font-weight:bold;'>ATTENZIONE:</span>&nbsp;"]

[h: sItemType = upper(getLibProperty("tipo",sItemName))]
[h, if(sItemType == "OFFENSIVO"), code:{
	[macro("combat/hasAttacks@this"): json.set("","source",source)]
	[if(macro.return != 1), code:{
		[broadcast(sWarn+getName(source) + " Non ha attacchi a disposizione",getPlayerName())]
		[return(0,0)]
	}]
}]

[macro("core/getOverride@this"):json.append(source,"itemBlock")]
[h, if(macro.return > 0), code:{
	[broadcast(sWarn+"l'uso dell'oggetto è stato bloccato",getPlayerName())]
	[return (0,0)]
}]

[h: macro.return = 1]

