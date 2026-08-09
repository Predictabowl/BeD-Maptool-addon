[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "Incitare"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: bonus = 1]

[h: spellType = fetchSpellProp("Incitare","tipo")]
[h: param = json.set("","target",target,"effetto",nomeDec,"stato","Armatura","subito",1,"tipo","Benefico")]

[h: temp = json.set("","key","TS_Rif","value",bonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","TS_Tem","value",bonus,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Vol","value",bonus,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]