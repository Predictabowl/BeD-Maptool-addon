[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]


[h: spellName = "PozioneVelocita"]

[h: param = json.set("","target",target,"effetto","Velocita","moltiplicatore",1)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]

[macro("consumables/itemEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"libName",spellName,"effetto",oEffetto)]

