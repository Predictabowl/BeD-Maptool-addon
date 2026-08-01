[h: attaccante = json.get(macro.args,0)]
[h: difensore = json.get(macro.args,1)]
[h: sTipo = json.get(macro.args,2)]

[h: sProt = "PROTEZIONE"]
[h: sSfida = "SFIDA"]
[h: sProp = "PROPRIETARIO"]

[h, if(sTipo == sProt): tokenMarchiato = difensore; tokenMarchiato = attaccante]

[macro("mechanics/getMarchio@this"):json.append(tokenMarchiato,sTipo)]
[h: oMarchio = macro.return]
[h: listColpiti = json.get(oMarchio,"colpiti")]
[h, if(listContains(listColpiti,attaccante) == 0), code:{
	[h: proprietario = json.get(oMarchio,"source")]
	[macro("mechanics/getMarchio@this"): json.append(proprietario,sProp)]
	[h: oPMarchio = macro.return]
	[h: macroName = json.get(oPMarchio,"MacroName")]
	[h: sMNome = json.get(oPmarchio,"NomeEffetto")]
	[msgOut = strformat("%s Infrange il Marchio %s di %s",getName(attaccante), sMNome,getName(proprietario))]
	
	[oEventParam = json.set("","tipoMarchio", sTipo,"proprietario", proprietario, "tokenMarchiato", tokenMarchiato)]
	[macro("events/runEvents@this"): json.set("","source",attaccante,"target",difensore,"event","On_Marchio_Break","eventParam",oEventParam)]
	
	[h, if(macroName != ""), code:{
		[macroParam = json.get(oMarchio,"MacroParam")]
		[macroParam = json.set(macroParam,"attaccante",attaccante,"difensore",difensore,"proprietario",proprietario)]
		[macro(macroName):macroParam]
		[msgOut = strformat("%s<br>%s",msgOut,macro.return)]
	}]
	[listColpiti = listAppend(listColpiti,attaccante)]
	[oMarchio = json.set(oMarchio,"colpiti",listColpiti)]
	[macro("mechanics/writeMarchioOnToken@this"): json.append(tokenMarchiato,sTipo,oMarchio)]
	[broadcast(msgOut)]
}]
