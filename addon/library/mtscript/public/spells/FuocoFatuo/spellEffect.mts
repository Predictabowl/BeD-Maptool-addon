[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FuocoFatuo"]

[h: param = json.set("","target",target,"stato","","subito",1,"tipo","Magia","mutex",spellName)]

[h: temp = json.set("","key","Elusione","value",-15,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Furtivita","value",-5,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
