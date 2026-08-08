[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "BenedizioneForzaDellaMontagna"]

[h: temp = json.set("","key","LA","value",1,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","LL_Base","value",1,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro)]

[macro("powers/benedizioneSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]