[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "BenedizioneAliDelVento"]

[h: temp = json.set("","key","VA","value",14,"tipo","onceMod","moltiplicabile",0)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","macroName","spells/BenedizioneAliDelVento/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro)]

[h, macro("powers/benedizioneSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]