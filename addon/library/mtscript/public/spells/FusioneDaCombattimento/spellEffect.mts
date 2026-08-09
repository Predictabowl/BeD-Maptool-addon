[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FusioneDaCombattimento"]
[h: iLMM = getLMM(source,SpellName)]

[h: temp = json.set("","key","LA","value",iLMM,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Mancare","value",10,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro,"stato","Maestria","subito",1,"tipo","Magia")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
