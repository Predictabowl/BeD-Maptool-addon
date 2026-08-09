[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ConsistenzaGranitica"]

[h: temp = json.set("","key","TS_Tem","value",4,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]