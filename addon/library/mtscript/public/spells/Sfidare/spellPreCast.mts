[h: source = json.get(macro.args,"source")]

[h: spellName = "Sfidare"]
[h, macro("powers/DefaultMarchioPrecast@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args, "spellName", spellName, "removeMacro", 1)]
