[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "MorsoAppestato01"]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,spellName)]
[h: iLL = macro.return]
[h: iLP = getLP(source,target,iLL,spellName)]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]

[h: oParam = json.set("","nomeStatoBase","Nausea")]
[h: temp = json.set("","tipo","macroCall","macroName","powers/afflizioneStatoTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",oParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]