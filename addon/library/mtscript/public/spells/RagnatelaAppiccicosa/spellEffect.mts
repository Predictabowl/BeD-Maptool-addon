[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "RagnatelaAppiccicosa"]

[h: sEffetto = "Lentezza"]
[h: iMolt = 2]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
