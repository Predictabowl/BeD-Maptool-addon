[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "LentezzaMagica"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]


[h: param = json.set("","target",target,"effetto","Lentezza","nome",nomeDec,"moltiplicatore",2)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h, if(target == source): PA = PA+2]

