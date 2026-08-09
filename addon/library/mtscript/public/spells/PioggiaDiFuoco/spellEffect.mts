[h: source = json.get(macro.args,"source")]

[h: spellName = "PioggiaDiFuoco"]

[h, if(isEnergiaDistruttiva(source)), code:{
	[sDanno = "1d4"]
}; {
	[sDanno = "1d3"]
}]

[h: jAuraEffectParam = json.set("", "dannoPerRound", sDanno)]
[h: jParams = json.set("", "origine", source, "caster", source, "spellName", spellName,	"isStatic", 1, "auraEffectMacro", buildSpellMacroName("PioggiaDiFuoco","auraMacro"), "effetto", jAuraEffectParam, "isTransitable", 1, "autoRoundUpdate", 1)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]