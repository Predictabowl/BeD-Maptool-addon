[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "CaricaInarrestabile"]

[h: sName = fetchSpellProp(spellName,"nome_decorativo")]

[h: param = json.set("","target",target,"effetto","Atterrato","moltiplicatore",1)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]
[h: iEffectDur = json.get(oEffetto,"durata")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"durata",iEffectDur)]



