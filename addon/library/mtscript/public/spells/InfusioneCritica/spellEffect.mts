[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "InfusioneCritica"]

[h: param = json.set("","source",source,"scuola",fetchSpellProp(spellName,"scuola"))]
[h: name = fetchSpellProp(spellName,"nome_decorativo")]

[h: bonus = 10]

[h: bCheck = input("iStat|Probabilità Critico,Potenza Critico|Effetto|RADIO| SPAN=TRUE")]
[h, if(iStat == 0): sStat="Crit"; sStat="PCrit"]

[h: param = json.set("","target",target,"effetto",name,"stato","Maestria","subito",1,"tipo","Magia")]

[h: temp = json.set("","key",sStat,"value",bonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]