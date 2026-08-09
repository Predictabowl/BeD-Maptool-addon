[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "PattoconOltretomba"]


[h: oEffetto = json.set("","target",target,"stato","Protezione","subito",1,"tipo","Magia")]

[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("PattoconOltretomba","updateEvent"))]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: iLL = json.get(macro.return,"LL")]
[h: sEffectName = json.get(macro.return,"effectName")]
[h: bCritRes = getUltimoCritico(source)]

[h: setSpellData(target, sEffectName, 3)]
[h: macroParam = json.set("","LL",iLL,"origine",source,"effectName",sEffectName, "critRes", bCritRes)]
[h: eventInstaller(target,"On_Before_Damaged",spellName,buildSpellMacroName("PattoconOltretomba","eventBarriera"),macroParam)]
[h: eventInstaller(target,"On_Damaged",spellName,buildSpellMacroName("PattoconOltretomba","eventRemovePVT"),macroParam)]










