[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: oEffetto = json.get(macro.args,"effetto")]

[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: sState = "Veleno"]

[h: oEffetto = json.set(oEffetto,"target",target,"effetto",nomeDec,"stato",sState,"subito",1,"tipo",sState,"categoria",sState)]

[macro("powers/effectSpellTemplate@this"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
