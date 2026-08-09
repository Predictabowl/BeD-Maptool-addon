[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]


[h: spellName = "PozionePotenzaGrezza"]
[h: nomeDec = fetchConsumableProp(spellName,"nome_decorativo")]

[h: param = json.set("","target",target,"effetto",nomeDec,"stato","Potenziamento","subito",1,"tipo","Magia")]
[h: temp = json.set("","key","Mod_Danno_Out","value",0.1,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("consumables/itemEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"libName",spellName,"effetto",oEffetto)]


