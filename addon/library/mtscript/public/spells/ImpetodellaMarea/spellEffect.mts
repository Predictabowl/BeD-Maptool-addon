[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ImpetoDellaMarea"]
[h: name = fetchSpellProp(spellName,"nome_decorativo")]
[h: iBonus = 3]

[h: param = json.set("","target",target,"effetto",name,"stato","Protezione","subito",1,"tipo","Magia")]

[h: temp = json.set("","key","TS_Rif","value",iBonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","TS_Tem","value",iBonus,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Vol","value",iBonus,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
