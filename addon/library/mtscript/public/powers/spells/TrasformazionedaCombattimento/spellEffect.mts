[h: source = json.get(macro.args,"source")]

[h: spellName = "TrasformazionedaCombattimento"]

[h: name = fetchSpellProp("TrasformazionedaCombattimento","nome_decorativo")]

[h: iLMM = getLMM(source,spellName)]
[h: iBonusLA = 1 + iLMM]

[h: switchToken(source)]


[h: param = json.set("","target",source,"effetto",name,"stato","Maestria","subito",1,"tipo","Magia","mutex",fetchSpellProp(spellName,"tipo"))]

[h: temp = json.set("","key","LA","value",iBonusLA,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[macro("gui/updateSchedaAttacco@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]