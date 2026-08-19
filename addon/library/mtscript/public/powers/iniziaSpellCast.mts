[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: extraParam = json.get(macro.args,"extraParam")]

[h, if(source ==""): source = getImpersonated()]


[macro("powers/preProcessSpellTags@this"): json.append(source,spellName)]

<!-- Eventi di inizio Spellcast -->
[h: eventParam = json.set("","spellName",spellName)]
[macro("events/runEvents@this"): json.set("","source",source,"event","On_Spellstart","eventParam",eventParam)]
[h: msgOut = popMessaggio(source,"msgEventOn_Spellstart")] <!-- al momento inutilizzato -->

<!-- Il bersaglio può essere acquisito solo dopo gli eventi di start, perché possono influenzarlo -->
[macro("powers/getTentativeTarget@this"): json.append(source,spellName)]
[h: target = macro.return]
[h, if(listCount(target) == 0), code:{
	[broadcast("Fallimento acquisizione bersaglio",getPlayerName())]
	[clearSpellStartData(source)]
	[return (0,0)]
}]

<!-- Il check sul bersaglio può esser e fatto solo dopo aver preso il bersaglio e di conseguenza dopo gli eventi di Spellstart
Il che vuol dire se il safetycheck fa un abort non si ha un clean corretto degli eventi --> 
[macro("powers/safetyCheckHostile@this"):json.append(source,target,spellName)]
[h, if(macro.return !=  0), code:{
	[broadcast("Dichiarazione di azione annullata",getPlayerName())]
	[clearSpellStartData(source)]
	[return (0,0)]
}]

<!-- Altri controlli se il potere può essere lanciato -->
[macro("powers/checkSpellCast@this"): json.append(source,spellName)]
[h, if(!macro.return), code:{
	[clearSpellStartData(source)]
	[return (0,0)]
}]

[h: switchToken(source)]

[h: bOpp = 0]
[h, if(isPotereOffensivo(spellName)), code:{
	[macro("combat/checkAttFurtivo@this"): json.append(source, target)]
	[macro("combat/isOpportunita@this"): json.append(source,target)]
	[h: bOpp = macro.return && listContains(fetchSpellProp(spellName,"tags"),"OPP")]
}]

[h: time = getSpellTime(source,spellName,bOpp)]
[h, macro("powers/getSpellActionColor@this"): spellName]
[h: sActionColor = macro.return]
[macro("powers/generaOpportunita@this"):json.append(source,spellName)]
[h: opport = macro.return]
[h: sTipo = fetchSpellProp(spellName,"tipo")]
[h: sFluffSpell = fetchSpellProp(spellName,"nome_decorativo")]
[h: oMacroParam = json.set("","spellName",spellName,"isOpport",bOpp,"extraParam",extraParam)]
[h: param = json.set("","target",target,"source",source,"action",sFluffSpell,"time",time,"color","","tipo",sTipo,"opp",opport,"macro","powers/SpellCast@lib:it.aldinucci.piero.bed.maptool.ruleset","macroParam",oMacroParam, "color", sActionColor)]

[h: setMessaggio(source,"iniziaAzioneMsg",strformat("%s Inizia a lanciare un potere.",getName(source)))]
[macro("mobs/IniziaAzione@this"):param]
[bFlag = macro.return]

[h, if(bFlag), code:{
	[macro("events/eventInstaller@this"): json.set("","name","spellCastingInterruption","macroName","events/SpellCastingHittedInterrupt@this","event","On_Hitted","token",source)]
}]
