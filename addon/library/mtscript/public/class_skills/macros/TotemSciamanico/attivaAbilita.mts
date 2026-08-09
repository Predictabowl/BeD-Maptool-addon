[h: source = json.get(macro.args,0)]

<!-- DA FARE -->
[h: sNomeAb = "TotemSciamanico"]

[macro("powers/spawnTokenBersaglio@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: oBersaglio = macro.return]
[h, if(getDistance(oBersaglio,0,source) > 3), code:{
	[macro("class_skills/DisattivaAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,sNomeAb,1)]
	[appendMessaggio(source,"strAbilitaAttivata","Bersaglio fuori portata, Abilita fallita."))]
	[return(0,1)]
}]

[h: sSpawner = "SpawnerTotemSciamanico"]
[h: sMacroEffetto = "mechanics/servitoreAnimato@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: sSizeD = "1/3"]
[h: iDurata = 12]
[h: sNome = fetchClassSkillProp(sNomeAb,"nome_decorativo")]

<!-- preparo l'evocazione-->
[h: sMap = "Librerie"]
[h: sThisMap = getCurrentMapName()]
[h, if(sMap != sThisMap):  moveTokenFromMap(sSpawner,sMap,0,0,0)]

[macro("core/setPadrone@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sSpawner,source)]
[setOwner("",sSpawner)]

[h: switchToken(source)]
[h: setProperty("Livello",Livello,sSpawner)]
[h: setProperty("LD",LD,sSpawner)]
[h: setProperty("Res_Acqua",Res_Acqua,sSpawner)]
[h: setProperty("Res_Fuoco",Res_Fuoco,sSpawner)]
[h: setProperty("Res_Aria",Res_Aria,sSpawner)]
[h: setProperty("Res_Terra",Res_Terra,sSpawner)]
[h: setProperty("Res_Arcano",Res_Arcano,sSpawner)]
[h: setProperty("Res_Mentale",Res_Mentale,sSpawner)]
[h: setProperty("Res_Negativo",Res_Negativo,sSpawner)]
[h: setProperty("Res_Positivo",Res_Positivo,sSpawner)]
[h: setProperty("Res_Fisico",Res_Fisico,sSpawner)]
[h: iPV = floor(PV_Max/2)]
[h: setProperty("PV_Max",iPV,sSpawner)]
[h: setProperty("PV",iPV,sSpawner)]


[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sSpawner,"On_Death","despawnEvent","mechanics/despawnOnDeath@lib:it.aldinucci.piero.bed.maptool.ruleset","")]

[h, if(isPC(source)): setPC(sSpawner); setNPC(sSpawner)]

<!-- Spawn -->
[macro("mechanics/spawnCreatura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sSpawner,sNome,sSizeD)]
[h: oSpawned = macro.return]

<!-- Effetto a tempo per il Despawn -->
[h: param = json.set("","target",source,"effetto",sNome,"durata",iDurata,"subito",1,"tipo","SERVITORE","mutex","SERVITORE")]
[h: macroParam = json.set("","creaturaName",oSpawned)]
[h: temp = json.set("","tipo","macroCall","macroName",sMacroEffetto,"parametri",macroParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffetto]


<!-- Assegno servitore-->
[macro("core/setEffettoServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,sNome)]
[macro("core/setServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,oSpawned)]

[h, if(sMap != sThisMap):  moveTokenToMap(sSpawner,sMap,4,-23,0)]


[h: macro.return = 0]	