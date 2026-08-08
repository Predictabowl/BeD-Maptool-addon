[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FuriaElementale"]

[h: jStat1 = json.set("","key","Mod_Danno_Out","value",0.12,"tipo","onceMod","moltiplicabile",0)]
[h: jStat2 = json.set("","key","Crit","value",12,"tipo","onceMod","moltiplicabile",0)]
[h: jStat3 = json.set("","key","PCrit","value",12,"tipo","onceMod","moltiplicabile",0)]
[h: jStats = json.append(jStat1, jStat2, jStat3)]
[h: oEffetto = json.set("","params", jStats,"stato","Potenza")]

[h: servantParams = json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): servantParams]
[h: selfParams = json.set(servantParams, "target", source)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): selfParams]
