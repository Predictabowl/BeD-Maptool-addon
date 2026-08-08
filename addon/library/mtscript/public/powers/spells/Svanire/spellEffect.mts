[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Svanire"]
[h: sEffetto = "Mimetizzato"]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",3)]
[h: oEffetto = json.remove(macro.return,"effetto")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]