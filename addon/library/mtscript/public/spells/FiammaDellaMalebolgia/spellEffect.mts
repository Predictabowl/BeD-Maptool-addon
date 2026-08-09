[h: source = json.get(macro.args,"source")]

[h: spellName = "FiammaDellaMalebolgia"]

[h: jParams = json.set("", "origine", source, "caster", source, "spellName", spellName, "isStatic", 1, "auraEffectMacro", buildSpellMacroName("FiammaDellaMalebolgia","auraMacro"),"isTransitable", 1, "autoRoundUpdate", 1)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]