[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "PozzoDelleAnime"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: spellType = fetchSpellProp(spellName,"tipo")]

[h: sSpawner = "Lib:Pozzo-Anime"]
[h: sNome = "Pozzo delle Anime"]
[h: sMacroAtt = buildSpellMacroName("PozzoDelleAnime","attivaEffettoPozzo")]
[h: numCariche = 5]

[macro("combat/getUltimoCritico@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: critRes = macro.return]
[h: args = json.set("","source",source,"target",target,"spellName",spellName,"critRes",critRes)]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): args]
[h: iLL = macro.return]

<!-- Spawn pozzo -->
[h: setLibProperty("nome_macro",sMacroAtt,sSpawner)]
[h: macroParam = json.set("","LL",iLL,"cariche",numCariche,"critRes",critRes)]
[h: setLibProperty("parametri",macroParam,sSpawner)]
[h: setLibProperty("proprietari",source,sSpawner)]
[h, if(isPC(source)): setPC(sSpawner, "Librerie"); setNPC(sSpawner, "Librerie")]


[h: sLabel = strformat("Cariche: %{numCariche}")]
[h: sCreaturaName = strformat("%{fluffname} (%s)",getName(source))]
[macro("mechanics/spawnCreatura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sSpawner,sCreaturaName,"2/3",sLabel)]
[h: oSpawned = macro.return]

<!-- Effetto a tempo per il Despawn -->

[h: param = json.set("","target",source,"effetto",fluffName,"subito",1,"tipo",spellType,"mutex",spellType)]
[h: macroParam = json.set("","creaturaName",oSpawned)]
[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("PozzoDelleAnime","effectRemove"),"parametri",macroParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]



