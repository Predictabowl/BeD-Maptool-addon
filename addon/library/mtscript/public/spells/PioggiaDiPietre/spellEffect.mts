[h: source = json.get(macro.args,"source")]

[h: spellName = "PioggiaDiPietre"]

[h: jParams = json.set("", "origine", source, "caster", source, "spellName", spellName,	"isStatic", 1, "auraEffectMacro", "spells/PioggiaDiPietre/auraMacro@lib:it.aldinucci.piero.bed.maptool.ruleset","isTransitable", 1, "autoRoundUpdate", 1)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]