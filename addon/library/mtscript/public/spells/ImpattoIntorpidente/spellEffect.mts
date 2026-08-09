[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "ImpattoIntorpidente"]

[h: sEffetto = "Torpore"]
[h: iMolt = 1]

[h: param = json.set("","target",target,"effetto",sEffetto,"moltiplicatore",iMolt)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]





