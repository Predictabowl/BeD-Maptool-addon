[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: origine = json.get(macro.args,"origine")]

[h: spellName = "NubeTossica"]
[h: sNomeEffAux = strformat("Veleno [%s-%s]",fetchSpellProp(spellName,"nome_decorativo"),getName(source))]

[h: temp = json.set("","key","Mancare", "value", 5,"tipo","onceMod", "moltiplicabile", 1)]
[h: oEffetto = json.set("", "stato", "Veleno","params", json.append("",temp),"verbose",0, "tipo", "NASCOSTO", "effetto", sNomeEffAux)]

[h: oSpellEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]
[h: sDotMsg = popMessaggio(target,"msgEffetto")]
[h, if(sDotMsg != ""): sDotMsg = "<br>"+sDotMsg]


[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno", "1", "stato","","bloccaTS",1,"effettoAux",sNomeEffAux)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
[h: appendMessaggio(target,"msgEffetto",sDotMsg)]

