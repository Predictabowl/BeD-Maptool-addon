[h, if(argCount()>1), code:{
	[source = arg(0)]
	[spellName = arg(1)]
	[if(argCount()>2): oMoreParams = arg(2); oMoreParams = "{}"]
	[target = json.get(oMoreParams, "target")]
	[bBaseValue = json.get(oMoreParams,"baseValue")]

};{
	[oArgs = arg(0)]
	[assert(json.type(oArgs) == "OBJECT","powers/getSpellAOE@this chiamata con parametri errati")]
	[source = json.get(oArgs,"source")]
	[target = json.get(oArgs,"target")]
	[spellName = json.get(oArgs,"spellName")]
	[bBaseValue = json.get(oArgs,"baseValue")]
}]


[h: iAOE = fetchSpellProp(spellName,"area")]
[h, if(!isNumber(iAOE)), code:{
	[macro(buildSpellMacroName(spellName,"getAOE")): json.set("","source",source)]
	[iAOE = macro.return]
}]

[h: sType = fetchSpellProp(spellName,"property_type")]
[h, if(sType != "SPELL"): return(0, iAOE)]

[h, if(source != "" && bBaseValue != 1), code:{
	[h: iMod = 0]
	[h: jData = getSpellStartData(source,spellName)]
	[h, if(json.contains(jData,"modAoE")): iMod = iMod + json.get(jData,"modAoE")]

	[macro("powers/getSpellMod@this"): json.append(source,spellName,"AoE")]
	[h: iMod = iMod + json.get(macro.return,"mod")]
	[h: dPerc = json.get(macro.return,"perc")]

	[h: iAOE= iAOE+iMod]

}]


[h: macro.return = iAOE]