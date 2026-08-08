[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "TranceCombattivo"]
[h: iLMM = getLMM(source,spellName)]

[h: temp = json.set("","key","LA","value",iLMM,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Mancare","value",3,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto= json.set("","source",source,"target",target,"stato","Maestria","tipo","Magia","params",altro)]	

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
