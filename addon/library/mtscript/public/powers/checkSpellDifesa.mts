[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: spell = json.get(macro.args,"spell")]
[h: bOpp = json.get(macro.args,"isOpport")] <!-- Opzionale -->
[h: bSaveResult = json.get(macro.args,"saveResult")] <!-- Opzionale, salva il risultato -->
[h: bOffensivo = json.get(macro.args,"isHarmful")] <!-- Opzionale, salva il risultato -->

[h, if(!isNumber(bOpp)): bOpp = 0]
[h, if(!isNumber(bSaveResult)): bSaveResult = 1]
[h, if(!isNumber(bOffensivo)), code:{
	[macro("powers/isHarmful@this"):spell]
	[bOffensivo = macro.return]
}]

[macro("powers/getSpellProiettile@this"): json.set("","source",source,"spellName",spell)]
[h: lProiettile = macro.return]
[h: bOverride = getOverride(target,"difesaEnergetico")]
[h, if(bOverride && lProiettile == "ENERGETICO"): lProiettile = "MATERIALE"]

[h: lTipo = fetchSpellProp(spell,"tipo")]
[r, if(lProiettile == "MATERIALE" && bOffensivo), code:{
	[macro("combat/checkDifesa@this"):json.append(source,target,bOpp)]
	[h: sResult = macro.return]
};{
	[h: sResult = "impossibile"]
}]

[h, if(bSaveResult), code:{
	[macro("combat/setUltimaDifesa@this"): json.append(source, sResult)]
}]

[h: macro.return = sResult]