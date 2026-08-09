[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MantoDiNegazione"]


[h: param = json.set("","target",target,"stato","Copertura","subito",1,"tipo","Magia","mutex",spellName)]

[h: temp = json.set("","macroName","spells/MantoDiNegazione/removeEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[h: setCoperturaSlot(0.15, target, spellName)]