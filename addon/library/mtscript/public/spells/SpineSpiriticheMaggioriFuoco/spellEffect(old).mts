[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SpineSpiriticheMaggioriFuoco"]
[h: sMutex = "SPINESPIRITICHE"]

[h: param = json.set("","target",target,"subito",1,"tipo","Magia","mutex",sMutex)]
[h: temp = json.set("","macroName",buildSpellMacroName("SpineSpiriticheMaggioriFuoco","removeEvent"),"tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",param)]
[h: iLL = json.get(macro.return,"LL")]


<!-- Richiede un evento per quando si viene attaccati -->
[h: oMacroParam = json.set("","LL",iLL,"origine",source,"critResult",getUltimoCritico(source),"maxDist",2,"dannoLP","1d7","spellName",spellName)]
[h: eventInstaller(target,"On_Hitted",spellName,"events/eventoSpine@lib:it.aldinucci.piero.bed.maptool.ruleset",oMacroParam)]