[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]


[h: spellName = "RabbiaDirompente"]

[h: oEffetto = json.set("","stato","Furia","subito",1)]

[h: iBonus = 8]
[h: temp = json.set("","key","PCrit","value", 20,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]


