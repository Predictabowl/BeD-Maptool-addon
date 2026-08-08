[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AttenuazioneCinetica"]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","effetto","Lentezza")]
[h: oEffetto = macro.return]	

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
