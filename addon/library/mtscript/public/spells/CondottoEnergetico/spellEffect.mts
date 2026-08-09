[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "CondottoEnergetico"]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]


[h: oEffetto = json.set("","effetto",sNomeDec,"stato","CuraUp")]

[h: temp = json.set("","key","Mod_Cura_Out","value",0.20,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]