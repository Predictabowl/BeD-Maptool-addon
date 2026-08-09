[h: source = json.get(macro.args,"source")]

[h: spellName = "PioggiaDiPietre"]

[h: jParams = json.set("", "origine", source, "caster", source, "spellName", spellName,	"isStatic", 1, "auraEffectMacro", buildSpellMacroName("PioggiaDiPietre","auraMacro"),"isTransitable", 1, "autoRoundUpdate", 1)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]