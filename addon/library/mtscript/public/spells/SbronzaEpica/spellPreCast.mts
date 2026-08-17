[h: source = json.get(macro.args,"source")]

[h: spellName = "SbronzaEpica"]

[h: return(0,"")]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto","Confusione","moltiplicatore",3)]
[h: oEffetto = json.remove(macro.return, "durata")]

[h: oSpellEffectParam = json.set("","source",source,"target",source,"spellName",spellName,"effetto",oEffetto,"bloccaTS",1)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]