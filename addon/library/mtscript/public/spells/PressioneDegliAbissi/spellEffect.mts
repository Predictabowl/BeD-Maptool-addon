[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]
[h: oExtraParam = json.get(macro.args,"extraParam")]

[h: iMolt = 2]

[h: param = json.set("","target",target,"effetto","Lentezza","moltiplicatore",iMolt)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
