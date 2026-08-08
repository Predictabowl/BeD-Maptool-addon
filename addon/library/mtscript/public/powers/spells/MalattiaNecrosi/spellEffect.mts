[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MalattiaNecrosi"]


[h: temp = json.set("","key","Mancare","value",8,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PA","value",-1,"tipo","continuousMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]













