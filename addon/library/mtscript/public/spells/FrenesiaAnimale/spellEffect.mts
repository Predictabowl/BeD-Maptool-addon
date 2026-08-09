[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FrenesiaAnimale"]
[h: name = fetchSpellProp(spellName,"nome_decorativo")]
[h: iBonus = 3]

[h: param = json.set("","target",target,"effetto",name,"stato","Potenziamento","subito",1,"tipo","Magia")]

[h: temp = json.set("","key","VA","value",10,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PA","value",1,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","PA_Max","value",1,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Mod_Cura_In","value",0.1,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
