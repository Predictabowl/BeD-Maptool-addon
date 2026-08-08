[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "MorsoDelSerpente"]

[h, if(getState("Veleno", target)): iMolt = 2; iMolt = 1]

[h: param = json.set("","target",target,"effetto","Debolezza","moltiplicatore",iMolt)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]
[h: broadcast(oEffetto)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]



