<!-- chiamando questa macro direttamente non viene terminata o interrotta l'azione -->
[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: bOpp = json.get(macro.args,"isOpport")]
[h: sSpellMacro = json.get(macro.args, "spellMacro")]

[h: iArma = getArmaDaUsare(source)]
[h: param = json.set(macro.args, "arma", iArma, "spellMacro", sSpellMacro)]

[h: switchToken(source)]
[h: bClearance = 1]

[h, if(json.contains(macro.args,"target") == 1), code:{
	[h: target = json.get(macro.args,"target")]
};{
	[macro("powers/getFinalTarget@this"):json.append(source,spellName)]
	[h: target = macro.return]
	[if(target == -1), code:{
		[sMsg = strformat("(%s) Impossibile risolvere l'azione: %s",getName(source),getMessaggio(source,"targetingLog"))]
		[broadcast(sMsg, getPlayerName())]
		[return(0, -1)]
	}]
}]

[macro("powers/safetyCheckHostile@this"):json.append(source,target,spellName,1)]
[h, if(macro.return != 0), code:{
	[broadcast("Impossibile risolvere l'azione: Manualmente abortita",getPlayerName())]
	[return(0, -1)]
}]

[h, if(bClearance), code:{
	[h: eventParam = json.set("","spellName",spellName)]
	[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Spellcast","eventParam",eventParam)]
	
	[macro("core/popOverride@this"):json.append(source,"SpellBlock")]
	[h, if(macro.return >0): bClearance = 0; bClearance = 1]
}]

<!-- Il marchio viene controllato al lancio e non alla dichiarazione, perché potrebbe non avere bersagli alla dichiarazione 
	Si controlla prima dei prezzi di attivazione perché potrebbe influire su di essi (basta l'intenzione).
-->
[h, if(bClearance == 1), code:{
	[macro("powers/isHarmful@this"): spellName]
	[if(macro.return == 1), code:{
		[macro("checkMarchi@Lib:Meccaniche"): json.append(source,target)]
	}]
	[macro("powers/checkComponenti@this"): json.append(source,spellName)]
	[bClearance = macro.return]
}]

[h, if(bClearance == 1), code:{
	[rollCriticoSpell(source,spellName)]
	[h: param = json.set(param,"target",target)]
	[macro("powers/getSpellPrice@this"):param]
	[aCosts = canPayAction(macro.return)]
	[bClearance = json.get(aCosts,0)]
	[if(!bClearance): broadcast(popMessaggio(source,"checkPayAction"),getPlayerName())]
}]

[r, if(bClearance == 1), code:{
	[macro("powers/consumeComponenti@this"):json.append(source,spellName)]
	[macro("powers/setRecupero@this"):json.append(source,spellName)]
	[r, macro("powers/callSpellEffect@this"): param]
	[macro("powers/endOfCastUpdates@this"): json.set("","source",source,"spell",spellName,"isOpport",bOpp)]
	[h: payAction(json.get(aCosts,1))]
	[h: bInterrupt = 0]
};{
	[h: bInterrupt = 1]
}]

[h: clearSpellStartData(source)]
[h: delUltimoCritico(source)]
[h, macro("powers/despawnTokenBersaglio@this"): source]

[h: macro.return = bInterrupt]