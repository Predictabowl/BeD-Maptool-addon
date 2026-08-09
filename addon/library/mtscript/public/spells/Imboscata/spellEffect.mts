[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Imboscata"]

[h: oEffetto = json.set("","moltiplicatore",1,"tipo","Nocivo")]
[h: temp = json.set("","macroName",buildSpellMacroName("Imboscata","specialEffect"),"tipo","macroCall", "parametri", json.set("", "source", source))]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]



