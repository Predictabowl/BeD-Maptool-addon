[h: target = json.get(macro.args,"source")]
[h: oPozzo = json.get(macro.args,"pozzo")]


<!--i Parametri vanno presi dal pozzo direttamente, altrimenti potrebbero non essere consistenti -->
[h: source = listGet(getProperty("proprietari",oPozzo),0)]
[h: oParametri = getProperty("parametri",oPozzo)]
[h: iLL = json.get(oParametri,"LL")]
[h: numCariche = json.get(oParametri,"cariche")]
[h: bCritRes = json.get(oParametri,"critRes")]

[h: spellName = "PozzoDelleAnime"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: sCuraLL = 4]

<!-- serve il controllo sulla distanza -->
[h: iRange = 1]
[h: iDistance = getDistance(target,0,oPozzo)]
[h, if(iDistance > iRange), code:{
	[bFlag = 0]
	[broadcast(strformat("%s &egrave troppo lontano da %s",getName(target),getName(oPozzo)))]
};{
	[bFlag = 1]
}]

<!-- serve il pago dei PA -->
[h, if(bFlag), code:{
	[macro("core/payAction@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",target,"PA",3)]
	[bFlag = macro.return]
}]

[h, if(bFlag), code:{
	[h, if(numCariche > 0), code:{
		[h: param = json.set("","LL",iLL,"healLL",sCuraLL,"target",target,"source",source,"critRes",bCritRes)]
		[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
		[h: danno = macro.return]

		[h: param = json.set("","target",target,"valore",danno,"verbose",0)]
		[macro("core/CuraTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
		[h: numCariche = numCariche-1]
		[setLabel(strformat("Cariche: %{numCariche}"),oPozzo)]
	}]

	[h, if(numCariche < 1), code:{
		[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,nomeDec)]
	};{
		[h: oParametri = json.set(oParametri,"cariche",numCariche)]
		[setProperty("parametri",oParametri,oPozzo)]
	}]
}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,target)]
[h: sMsg = popMessaggio(source,"strPotere")]
[h: appendMessaggio(target,"endOfActionMsg",sMsg)]

[h, if(bFlag): bInterrupt = 0; bInterrupt = 1]
[h: macro.return = bInterrupt]