[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaledizioneDisgregazione"]

[h: iPenal = -1]

[h: temp = json.set("","key","LD","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Res_Aria","value", iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Acqua","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Fuoco","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Terra","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Mentale","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Arcano","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Positivo","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Negativo","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Res_Fisico","value",iPenal,"tipo","onceMod","moltiplicabile",1)]
[h: altro = json.append(altro,temp)]

[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]












