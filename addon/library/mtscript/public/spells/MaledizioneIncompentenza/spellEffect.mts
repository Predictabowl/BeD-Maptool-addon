[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaledizioneIncompentenza"]

[h: temp = json.set("","tipo","onceMod","key","PA_Max","value",-2,"moltiplicabile",1)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","tipo","onceMod","key","PA","value",-2,"moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","tipo","onceMod","key","Mancare","value",3,"moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]






