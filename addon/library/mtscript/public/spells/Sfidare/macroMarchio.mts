[h: difensore = json.get(macro.args,"difensore")]
[h: target = json.get(macro.args,"attaccante")]
[h: source = json.get(macro.args,"proprietario")]
[h: iLL = json.get(macro.args,"LL")]
[h: bCritRes = json.get(macro.args,"critRes")]

[h: spellName = "Sfidare"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: effectName = strformat("Attivazione Marchio %{fluffName}")]
[h: param = json.set("","target",source,"durata",1,"effetto",effectName,"subito",1,"tipo","Marchio","mutex",spellName,"verbose",0)]
[h: temp = json.set("","macroName",buildSpellMacroName("Sfidare","attivazioneRemove"),"tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro)]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

[h: jMacroParam = json.set("", "LL", iLL, "critRes", bCritRes)]
[eventParam = json.set("","name",spellName,"event","on_Opportunita","token",source,"macroName",buildSpellMacroName("Sfidare","eventMarchio"), "macroParam", jMacroParam)]
[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): eventParam]

[macro("utility/forcePushOppOverride@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target)]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",source,"key","strPotere")]