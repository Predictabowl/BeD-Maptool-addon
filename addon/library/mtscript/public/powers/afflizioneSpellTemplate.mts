[h: broadcast("DEPRECATED: "+getMacroName()+"@"+getMacroLocation())]
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: oEffetto = json.get(macro.args,"effetto")]

[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: sTipo = fetchSpellProp(spellName,"tipo")]

[macro("powers/getStateIcon@this"): spellName]
[h: sState = macro.return]
[h: sMutex = strformat("%{sTipo}_%s",getName(source))]

[h: oEffetto = json.set(oEffetto,"target",target,"effetto",nomeDec,"stato",sState,"subito",1,"tipo",sTipo,"categoria",sTipo,"mutex",sMutex)]

[macro("powers/effectSpellTemplate@this"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
