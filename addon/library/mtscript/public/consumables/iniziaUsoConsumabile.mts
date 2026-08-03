[h: source = json.get(macro.args,"source")]
[h: sItemName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h, if(source ==""): source = getImpersonated()]


<!-- Il bersaglio può essere acquisito solo dopo gli eventi di start, perché possono influenzarlo -->
[h, macro("powers/getTentativeTarget@this"): json.append(source,sItemName)]
[h: target = macro.return]
[h, if(target == ""), code:{
	[broadcast("Fallimento acquisizione bersaglio",getPlayerName())]
	[return (0,0)]
}]

<!-- Il check sul bersaglio può essere fatto solo dopo aver preso il bersaglio e di conseguenza dopo gli eventi di Spellstart
Il che vuol dire se il safetycheck fa un abort non si ha un clean corretto degli eventi --> 
[h, macro("powers/safetyCheckHostile@this"):json.append(source,target,sItemName)]
[h, if(macro.return !=  0), code:{
	[broadcast("Dichiarazione di azione annullata",getPlayerName())]
	[return (0,0)]
}]

<!-- Altri controlli se l'ggetto possa essere utilizzato -->
[h, macro("consumables/checkItemCast@this"): json.append(source,sItemName, oUseParam)]
[h, if(!macro.return), code:{
	[return (0,0)]
}]

[h: switchToken(source)]

[h, macro("consumables/getItemTime@this"): json.append(source,sItemName)]
[h: iTime = macro.return]

[h, macro("consumables/isOpportunita@this"):json.append(source,sItemName)]
[h: bOpport = macro.return]
[h: sDecoName = getLibProperty("nome_decorativo",sItemName)]
[h: sTipo = getLibProperty("tipo",sItemName)]
[h: oMacroParam = json.set("","spellName",sItemName,"useParam",oUseParam)]
[h: param = json.set("","target",target,"source",source,"action",sDecoName,"time",iTime,"tipo",sTipo,"opp",bOpport,"macro","consumables/usaConsumabile@this","macroParam",oMacroParam)]

[h, macro("powers/getSpellActionColor@this"): sItemName]
[h: param = json.set(param, "color", macro.return)]

[macro("consumables/setIsItemInCast@this"): source]
[h: setMessaggio(source,"iniziaAzioneMsg",
	strformat("%s Inizia ad utilizzare un oggetto.",getName(source)))]
[h, macro("mobs/IniziaAzione@this"):param]
[h: bFlag = macro.return]

[h, if(bFlag), code:{
	[macro("events/eventInstaller@this"): json.set("","name","spellCastingInterruption","macroName","events/SpellCastingHittedInterrupt@it.aldinucci.piero.bed.maptool.ruleset","event","On_Hitted","token",source)]

	[macro("powers/isHarmful@this"): sItemName]
	[if(macro.return == 1), code:{
		[macro("mechanics/checkMarchi@this"): json.append(source,target)]
	}]
}]
