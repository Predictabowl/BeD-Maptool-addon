[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "SincroniaPerfetta"]
[h: sElemento = fetchSpellProp(spellName,"elemento")]
[h: sTSType = fetchSpellProp(spellName,"TS")]


[h: jRange = json.set("", "token", source, "from", 1, "upto", 1)]
[h: bPC = isPC(source)]
[h: jConditions = json.set("","range", jRange, "pc", bPC, "npc", !bPC)]
[h: jTokens = getTokens("json", jConditions)]

[h, if(json.length(jTokens) > 0), code:{
	[bonus = 4]
	[iRand = roll(1, json.length(jTokens))]
	[sAlly = json.get(jTokens, iRand -1)]
};{
	[bonus = 2]
	[h: sAlly = ""]
}]

[h: spellType = fetchSpellProp(spellName,"tipo")]
[h: param = json.set("","target",source,"stato","Maestria","subito",1,"tipo","Fisico")]

[h: temp = json.set("","key","LA","value",bonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]

[h, if(sAlly != ""), code:{
	[h: temp = json.set("","key","LA","value", 2,"tipo","onceMod")]
	[h: altro = json.append("",temp)]
	[h: oAllyEffect = json.set(param,"params",altro, "target", sAlly)]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto", oAllyEffect)]
}]
