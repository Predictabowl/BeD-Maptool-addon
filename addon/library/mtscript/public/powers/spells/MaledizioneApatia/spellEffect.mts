[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaledizioneApatia"]

[h: temp = json.set("","tipo","onceMod","key","Schivare","value",-18, "moltiplicabile", 1)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","tipo","onceMod","key","Parare","value",-27, "moltiplicabile", 1)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]






