[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: spellName = json.get(macro.args,"spellName")]
};{
	[h: source = json.get(macro.args,0)]
	[h: spellName = json.get(macro.args,1)]
}]

[h: target = ""]
[h: spellTag = fetchSpellProp(spellName,"tags")]

[h: switchToken(source)]
[macro("powers/getSpellOrigine@this"): json.append(source,spellName)]
[h: sOrigine = macro.return]


[h, macro("powers/canChangeTarget@this"): source]
[h, if(macro.return):target = getSelected()]

[h, if(listCount(target) == 0), code:{
	[target = json.get(Azione_Corrente,"Bersaglio")]
}]


[h: iSpellRange = getSpellRange(source,spellName)]
[h: bAOE = isAoESpell(spellName,source)]

[h, if(listCount(target) == 1 && bAOE), code:{
	[target = getSelected()]
}]


[h, if(listContains(spellTag,"SERVITORETARGET") && !bAOE): return(0,getServitore(source))]
[h, if(listContains(spellTag,"SERVITORESINGLETARGET")): return(0,getServitore(source))]

[h: bSelfFlag = 0]
[h, if(iSpellRange ==0 && !bAOE): bSelfFlag = 1]
[h, if(iSpellRange ==0 && target == ""): bSelfFlag = 1]

[h, if(listContains(spellTag,"SELFTARGET") == 1): bSelfFlag = 1]
[h, if(listContains(spellTag,"CELLTARGET") == 1): bSelfFlag = 1]
[h, if(listContains(spellTag,"DRAWTARGET")), code:{
	[macro("utility/getUltimoDraw@this"): "{}"]
	[macro("utility/distanzaTokenDraw@this"): json.append(source, macro.return)]
	[if(macro.return > iSpellRange), code:{
		[appendMessaggio(source,"targetingLog", "Il disegno bersaglio è fuori portata","self")]
		[return(0, -1)]
	}]
	
	[macro("powers/getDrawAreaTargets@this"): json.append(source, spellName)]
	[return(0, macro.return)]
}]

[h, if(bSelfFlag): return(0,sOrigine)]

[h, if(listCount(target) == 1 && !bAOE), code:{
	[lVisible = canSeeToken(target,sOrigine)]
	[if(json.isEmpty(lVisible)), code:{
		[appendMessaggio(source,"targetingLog", strformat("Il bersaglio %s non è linea visiva",getName(target)))]
		[return(0,-1)]
	}]
}]

[h, if(listCount(target) == 1), code:{
	[macro("powers/isTargetLegal@this"): target]
	[if(!macro.return), code:{
		[appendMessaggio(source,"targetingLog", strformat("Il token %s non è un bersaglio valido",getName(target)))]
		[return (0, -1)]
	}]
}]

[h, if(listCount(target) == 0), code:{
	[sPlayer = getPlayerName()]
	[broadcast(strformat("(%{sPlayer}) Nessun bersaglio valido trovato, i bersagli verranno selezionati automaticamente"), "gm," + sPlayer)]
	[macro("powers/getSpellTarget@this"): json.append(source, spellName)]
	[target = macro.return]
}]

[h: macro.return = target]