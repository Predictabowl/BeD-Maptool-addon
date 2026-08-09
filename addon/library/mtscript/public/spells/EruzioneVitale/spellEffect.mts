[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EruzioneVitale"]

[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1d2")]

[h: iAoE = getSpellAoE(source, spellName)]

[h, macro("powers/isControlledSpell@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: bControlled = macro.return]
[h: jRange = json.set("", "token", target, "upto", iAoE, "distancePerCell", 0)]
[h: jSearchCond = json.set("", "propertyType", json.append("", "Basic"), "range", jRange)]
[h, if(bControlled), code:{
	[if(isPC(source)): jSearchCond = json.set(jSearchCond, "pc", 1); jSearchCond = json.set(jSearchCond, "npc", 1)]
}]
[h: lTokens = getTokens(",",jSearchCond)]

[h: jSecondParams = json.set("", "source", source, "target", lTokens, "spellName", spellName, "spellMacro", "spells/EruzioneVitale/spellEffectHeal@lib:it.aldinucci.piero.bed.maptool.ruleset", "isAttack", 0)]
[h, macro("powers/processSpellEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): jSecondParams]