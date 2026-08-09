[h: source = json.get(macro.args,"source")]
[h: target = source]


[h: spellName = "ManovraEvasiva"]

[h: temp = json.set("","key","Schivare","value",15,"tipo","onceMod")]
[h: altro = json.append("",temp)]

[h: oEffetto = json.set("","params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]