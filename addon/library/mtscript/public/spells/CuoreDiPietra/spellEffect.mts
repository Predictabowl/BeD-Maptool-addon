[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: spellName = "CuoreDiPietra"]

[h: param = json.set("","effetto","Pietrificato")]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
