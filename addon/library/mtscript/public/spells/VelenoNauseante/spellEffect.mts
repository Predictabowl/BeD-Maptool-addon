[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "VelenoNauseante"]

[h: oParam = json.set("","nomeStatoBase","Nausea")]
[h: temp = json.set("","tipo","macroCall","macroName","powers/afflizioneStatoTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",oParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"stato","Veleno","categoria","VELENO","moltiplicatore",2)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]




