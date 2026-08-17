[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "BenedizioneAnimaDiFuoco"]

[h: temp = json.set("","key","Mod_Danno_Out","value",0.05,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Crit","value",6,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","PCrit","value",6,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro)]

[macro("powers/benedizioneSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]