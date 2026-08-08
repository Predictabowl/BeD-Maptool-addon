[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "TremoreLocalizzato"]


[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"effetto","Atterrato")]
[h: oEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",macro.return)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffectParam]