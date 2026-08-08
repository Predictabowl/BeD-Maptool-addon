[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "VelocitaMassa"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]


[h: param = json.set("","target",target,"effetto","Velocita","nome",nomeDec,"moltiplicatore",1)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
