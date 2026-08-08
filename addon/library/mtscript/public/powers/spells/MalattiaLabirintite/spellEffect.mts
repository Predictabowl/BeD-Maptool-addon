[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MalattiaLabirintite"]

[h: temp = json.set("","tipo","macroCall","macroName","powers/spells/MalattiaLabirintite/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]






