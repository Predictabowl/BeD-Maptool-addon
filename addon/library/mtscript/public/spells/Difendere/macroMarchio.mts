[h: difensore = json.get(macro.args,"difensore")]
[h: target = json.get(macro.args,"attaccante")]
[h: source = json.get(macro.args,"proprietario")]

[h: spellName = "Difendere"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: sMarchioName = strformat("%{spellName}-%{target}")]

[h: effectName = strformat("Attivazione Marchio %{fluffName}")]
[h: param = json.set("","target",difensore,"durata",1,"effetto",effectName,"subito",1,"tipo","Marchio","mutex",spellName,"verbose",0)]
[h: temp = json.set("","macroName",buildSpellMacroName("Difendere","attivazioneRemove"),"tipo","macroCall", "parametri", json.set("","marchioName",sMarchioName))]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro)]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

[h: sMacroParam = json.set("","attaccante",target)]
[h: eventInstaller(difensore, "On_Attacked", sMarchioName, buildSpellMacroName("Difendere","eventMarchio"), sMacroParam)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",source,"key","strPotere")]