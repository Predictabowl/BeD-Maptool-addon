[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]

[h: temp = json.set("","tipo","macroCall", "macroName", buildSpellMacroName(spellName, "effectMacro"))]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","subito",1,"params",altro,"verbose",0)]

[h, macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
