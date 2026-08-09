[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "InfonderePotenza"]

[h: param = json.set("","target",target,"stato","Maestria","subito",1,"tipo","Magia","mutex",spellName)]

[h: temp = json.set("","key","LA","value",4,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
