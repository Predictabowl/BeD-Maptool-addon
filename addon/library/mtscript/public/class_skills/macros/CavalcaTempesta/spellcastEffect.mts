[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(oParam, "spellName")]
[h: sAbName = "CavalcaTempesta"]

[h: iAbLiv = getLivelloAbilita(source, sAbName)]
[h, switch(iAbLiv), code:
	case 1: {
		[sDanno = "1d8"]
	};
	case 2: {
		[sDanno = "1d11"]
	};
	default: {
		[macro("class_skills/DisattivaAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sAbName)]
		[return(0, "")]
	}
]

[h: jRange = json.set("", "token", source, "distancePerCell",0, "upto", 8 )]
[h, if(isPC(source)): sTargetType = "npc"; sTargetType = "pc"]
[h: jConditions = json.set("", sTargetType, 1, "range", jRange)]
[h: aTargets = getTokens("json", jConditions)]

[h: msgOutput = strformat("<div><img src='%s' width='25' height='25'/> <span>%s</span>",fetchClassSkillImage(sAbName),fetchClassSkillProp(sAbName,"nome_decorativo"))]
[h, foreach(id, aTargets), code: {
	[macro("powers/isTargetLegal@lib:it.aldinucci.piero.bed.maptool.ruleset"):id]
	[bIsLegal = macro.return]
	[if(bIsLegal), code:{
		[sTargetMsg= strformat("Bersaglio: <b>%s</b>",getName(id))]
		[bCrit = rollCriticoSpell(source, spellName)]
		[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "target", id, "spell", spellName, "danno", sDanno, "critRes", bCrit)]
		[discoverResistenzaBersaglio(spellName,source,id)]
		[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,id)]
		[h:msgOutPut= msgOutput+"<div style='border: 1px; border-style: dashed hidden dashed hidden;'>"+sTargetMsg+"<br>"+popMessaggio(source,"strPotere")+"</div>"]
	}]
}]

[macro("class_skills/DisattivaAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sAbName)]
[h: macro.return = msgOutput+"</div>"]