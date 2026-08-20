[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]

[h: iBonus = roll(1,4)]

[h: temp = json.set("","key","PA","value",iBonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PA_Max","value",iBonus,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","subito",1,"params",altro,"verbose",0)]


[h: sMsg = strformat("Il bersaglio guadagna 1d4 = %{iBonus} PA")]
[h: appendMessaggio(target,"msgEffetto",sMsg)]
[h, macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
