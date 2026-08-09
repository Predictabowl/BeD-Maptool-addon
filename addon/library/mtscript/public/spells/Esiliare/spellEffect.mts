[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: spellName = "Esiliare"]

[h: temp = json.set("","tipo","macroCall","macroName","powers/bandireEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri","")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0, "stato", "Bandito","tipo","Nocivo")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]