[h: source = json.get(macro.args,"source")]
[h: target = source]


[h: spellName = "Deflettere"]

[h: temp = json.set("","key","Parare","value",23,"tipo","onceMod")]
[h: altro = json.append("",temp)]

[h: oEffetto = json.set("","params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]