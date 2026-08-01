[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: sLibAbilita = json.get(macro.args,"abilita")]
};{
	[h: source = json.get(macro.args,0)]
	[h: sLibAbilita = json.get(macro.args,1)]
}]

[h: switchToken(source)]

[h: sAbilitaTag = json.append(source,sLibAbilita)]

[h: bInterrupt = 1]

[macro("class-skills/isAbilitaAttivabile@this"):sAbilitaTag]
[h: bFlag= macro.return]
[h, if(bFlag), code:{
	[macro("class-skills/canPayAbilityActivation@this"): sAbilitaTag]
	[aResult = macro.return]
	[h: bFlag = json.get(aResult,0)]

	[h, if(bFlag), code:{
		[if(isAbilitaEroica(sLibAbilita)): modPuntiEroe(source,-1000)]
		[h: sActivator = strformat("attivaAbilita@%{sLibAbilita}")]
		[macro(sActivator):source]
		[bInterrupt = macro.return]
		[h: returnStr = popMessaggio(source,"strAbilitaAttivata")]
		[h: sNomeAb = getLibProperty("nome_decorativo",sLibAbilita)]
		[h: im = getImage(sLibAbilita)]
		[h: msg = strformat("<br><img src='%{im}' width='25' height='25' /> ")]
		[h: msg = strformat("%{msg} Abilit&agrave;: <b> %{sNomeAb} </b> %{returnStr}")]
		[broadcast(msg,getPlayerName())]
	};{
		[broadcast(popMessaggio(source,"checkPayAction"),getPlayerName())]
	}]
};{
	[broadcast("Abilit&agrave non attivabile in questo momento.",getPlayerName())]
}]

[if(!bInterrupt), code:{ 
	[jCosts = json.get(aResult,1)]
	[payAction(jCosts)]
	[macro("class-skills/checkAndAddEstenuante@this"): json.append(source, sLibAbilita)]
	[macro("class-skills/setAbilitaInUso@this"): sAbilitaTag]
	[macro("class-skills/getDurataAbilita@this"): sAbilitaTag]
	[h: iDur = macro.return]
	[h, if(iDur == 0), code:{
		[macro("class-skills/DisattivaAbilita@this"): sAbilitaTag]
	}]
}]


[h: macro.return = bInterrupt]
