[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ArmaturaEpidermica"]


[macro("powers/armaturaEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "target", target, "spellName", spellName, "LDBonus", 4)]