[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "FormaSpirituale"]

[h: param = json.set("","target",target,"subito",1)]
[h: temp = json.set("","key","Mod_Danno_In","value",-0.4,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","TS_Rif","value",4,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Tem","value",4,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Vol","value",4,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Mancare","value",20,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
