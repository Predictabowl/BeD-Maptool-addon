[h: source = json.get(macro.args,"source")]

[h: spellName = "EgidaDivina"]
[h: name = fetchSpellProp(spellName,"nome_decorativo")]

[h: bonus = 4]

[h: spellType = fetchSpellProp("EgidaDivina","tipo")]
[h: param = json.set("","target",source,"effetto",name,"stato","Armatura","subito",1,"tipo","Magia","mutex",spellType)]

[h: temp = json.set("","key","LD","value",bonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]