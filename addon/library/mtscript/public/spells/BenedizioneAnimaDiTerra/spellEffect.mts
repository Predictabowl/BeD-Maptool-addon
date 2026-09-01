[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "BenedizioneAnimaDiTerra"]

[h: temp = json.set("","key","Mod_Danno_In","value",-0.11,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro)]

[macro("powers/benedizioneSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]