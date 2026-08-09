[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MarcescenzaPestilenziale"]

[h, if(getState("Veleno",target)): iMolt = 2; iMolt = 1]

[h: sEffetto = "Nausea"]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore", iMolt)]

[h: oSpellEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto", macro.return)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]

