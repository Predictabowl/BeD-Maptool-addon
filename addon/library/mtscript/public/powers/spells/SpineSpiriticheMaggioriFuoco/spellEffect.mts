[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SpineSpiriticheMaggioriFuoco"]
[h: sMutex = "SPINESPIRITICHE"]

[h: param = json.set("","target",target,"subito",1,"tipo","Magia","mutex",sMutex)]
[h: temp = json.set("","macroName","powers/spells/SpineSpiriticheMaggioriFuoco/removeEvent@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",param)]
[h: iLL = json.get(macro.return,"LL")]
[h: sEffectName = json.get(macro.return, "effectName")]


<!-- Richiede un evento per quando si viene attaccati -->
[h: oMacroParam = json.set("","LL",iLL,"origine",source,"critResult",getUltimoCritico(source),"maxDist",2,"dannoLP","1d2","spellName",spellName, "effectName", sEffectName)]
[h: eventInstaller(target,"On_Attacked",spellName,"events/eventoRitorsione@lib:it.aldinucci.piero.bed.maptool.ruleset",oMacroParam)]
[h: eventInstaller(target,"On_Round_Start",spellName,"events/eventoRitorsioneClear@lib:it.aldinucci.piero.bed.maptool.ruleset",oMacroParam)]