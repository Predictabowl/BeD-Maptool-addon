[h: source = json.get(macro.args,"source")]

[h: spellName = "ArmaturaSpiritica"]

[macro("powers/armaturaEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "spellName", spellName, "LDBonus", 3)]
