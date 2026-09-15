[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sSpawner = json.get(macro.args,"spawner")]
[h: sSizeD = json.get(macro.args,"size")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sNome = json.get(macro.args,"nomeCreatura")]

[h: oSpellTags = fetchSpellProp(spellName,"tags")]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: spellType = fetchSpellProp(spellName,"tipo")]

[macro("powers/getLivelloIndicativo@this"): json.set("","source",source,"target",target,"spellName",spellName)]
[h: iLL = macro.return]
[h: appendMessaggio(source,"strPotere",strformat("<br>Livello Indicativo: %{iLL}"))]

<!-- Ricavo i parametri-->

[h: oMacroAttParam = json.set("","padrone",source,"nomeIncantesimo",fluffName)]

[h: bFlag = 0]
[h: iPunti30 = ""]

[h, if(listContains(oSpellTags,"SERVITOREATTIVABILE")), code:{
	[h: sMacroAtt = "mechanics/attivaEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[h: oMacroAttParam = json.set(oMacroAttParam,"PAAttivazione",7)]
	[h: sMacroEffetto = "mechanics/servitoreAttivabileEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[sTipoServitore = "ATTIVABILE"]
	[bFlag = 1]
}]

[h, if(listContains(oSpellTags,"EVOCAZIONE")), code:{
	[h: sMacroAtt = ""]
	[h: sMacroEffetto = "mechanics/servitoreAnimato@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[sTipoServitore = "EVOCAZIONE"]
	[bFlag = 1]
}]

[h, if(listContains(oSpellTags,"CONVOCAZIONE") && !bFlag), code:{
	[h: sMacroAtt = ""]
	[h: sMacroEffetto = "mechanics/servitoreAnimato@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[sTipoServitore = "CONVOCAZIONE"]
	[h: iPunti30 = -2]
	[bFlag = 1]
}]


[h, if(!bFlag), code:{
	[h: sMacroAtt = ""]
	[h: sMacroEffetto = "mechanics/servitoreAnimato@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[sTipoServitore = "ANIMAZIONE"]
	[bFlag = 1]
}]

<!-- preparo l'evocazione-->
[h: sMap = "Librerie"]
[h: sThisMap = getCurrentMapName()]
[h, if(sMap != sThisMap), code:{
	[iSpawnerX = getTokenX(0, sSpawner, sMap)]
	[iSpawnerY = getTokenY(0, sSpawner, sMap)]
	[moveTokenFromMap(sSpawner,sMap,0,0,0)]
}]

[macro("core/setPadrone@this"): json.append(sSpawner,source)]
[h, if(sTipoServitore == "ANIMAZIONE"), code:{
	[setOwner(getOwners("json",source),sSpawner)]
};{
	[h: oMacroData = json.set("","nomeMacro",sMacroAtt,"macroParam",oMacroAttParam)]
	[h: setProperty("Macro_Interazione",oMacroData,sSpawner)]
	[h: putMacroInToken(sSpawner,"Servitore",oMacroData)]
}]

[h: oListaDatiCreatura = getProperty("Lista_Dati",sSpawner)]
[h: oListaDatiCreatura = setStrProp(oListaDatiCreatura,"TipoServitore",sTipoServitore)]
[h: setProperty("Lista_Dati",oListaDatiCreatura,sSpawner)]

[h: jRes = json.set("","puntiLiv30",iPunti30,"minCasuale",1)]
[macro("mechanics/setLivelloCreatura@this"): json.append(iLL, sSpawner, jRes)]
[macro("mechanics/setSummonPoteri@this"): sSpawner] 
[macro("mechanics/setSummonAbilita@this"): sSpawner] 
[macro("events/eventInstaller@this"): json.append(sSpawner,"On_Death","despawnEvent","mechanics/despawnOnDeath@lib:it.aldinucci.piero.bed.maptool.ruleset","")]

[h, if(isPC(source)): setPC(sSpawner); setNPC(sSpawner)]

<!-- Spawn -->
[r, macro("mechanics/spawnCreatura@this"): json.append(source,sSpawner,sNome,sSizeD)]
[h: oSpawned = macro.return]

<!-- Effetto a tempo per il Despawn -->
[h: param = json.set("","target",source,"effetto",fluffName,"subito",1,"tipo",spellType)]
[h: macroParam = json.set("", "creaturaName", oSpawned,"spellName",spellName)]
[h: temp = json.set("","tipo","macroCall","macroName",sMacroEffetto,"parametri",macroParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]
[macro("powers/effectSpellTemplate@this"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

<!-- Assegno servitore-->
[macro("core/setEffettoServitore@this"):json.append(source,fluffName)]
[macro("core/setServitore@this"):json.append(source,oSpawned)]
[h: setOwner(getOwners("json",source),oSpawned)]
[h: setOwner("",sSpawner)]

[h, if(sMap != sThisMap):  moveTokenToMap(sSpawner,sMap,iSpawnerX,iSpawnerY,0)]

<!-- Attivo il mantenimento. Se non c'è sarà automaticamente ignorato -->
[macro("powers/applyMantStandard@this"): json.set(macro.args,"spellName",spellName,"listaEffetti",fluffName)]

<!-- Aggiungi la creatura all'iniziativa -->
[h: switchToken(source)]
[h: setIniziativa(oSpawned,getInitiative())]

<!-- Apri la scheda -->
[macro("gui/UIOverlay@this"): source]
[h: return(0,"")]