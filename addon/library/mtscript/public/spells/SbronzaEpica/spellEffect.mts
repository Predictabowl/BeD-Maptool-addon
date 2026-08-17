[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]


[h: temp = json.set("","key","Crit","value",15,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PCrit","value",15,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Schivare","value",15,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Mod_Danno_Out","value",0.15,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Mancare","value",25,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]

[h: oEffetto = json.set("","params",altro, "stato", "Pozione")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]