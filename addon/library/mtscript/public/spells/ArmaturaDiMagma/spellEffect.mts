[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]

[h: temp = json.set("","key","Crit","value",10,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PCrit","value",10,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Tem","value",1,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Vol","value",1,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","TS_Rif","value",1,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]

[h: oEffetto = json.set("","params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]