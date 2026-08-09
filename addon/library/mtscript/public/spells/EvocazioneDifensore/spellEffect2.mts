<-- DEPRECATED -->
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h:switchToken(source)]
[h: spellName = "EvocazioneDifensore"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: spellType = fetchSpellProp(spellName,"tipo")]

[macro("powers/getLivelloIndicativo@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName)]
[h: iLL = macro.return]

[macro("mechanics/getTipoDemoneEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: sTipoD = macro.return]

[h, if(sTipoD == "DEMONE"), code:{
	[h: sSpawner = "Lib:Glabrezu"]
	[h: sNome = "Glabrezu"]
	[h: sSizeD = "Large"]
};{
	[h: sSpawner = "Lib:Barbazu"]
	[h: sNome = "Barbazu"]
	[h: sSizeD = "Medium"]
}]

<!-- preparo l'evocazione-->
[macro("core/setPadrone@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sSpawner,source)]
[h: sMacroAtt = "mechanics/attivaEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: oMacroParam = json.set("","padrone",source,"nomeIncantesimo",fluffName,"PAAttivazione",8)]
[h: oMacroData = json.set("","nomeMacro",sMacroAtt,"macroParam",oMacroParam)]
[h: setLibProperty("Macro_Interazione",oMacroData,sSpawner)]
[h: setLibProperty("Livello",iLL,sSpawner)]
[h: oListaDatiCreatura = getLibProperty("Lista_Dati",sSpawner)]
[h: oListaDatiCreatura = setStrProp(oListaDatiCreatura,"TipoServitore","EVOCAZIONE")]
[h: setLibProperty("Lista_Dati",oListaDatiCreatura,sSpawner)]


[macro("events/eventLibInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sSpawner,"On_Death","despawnEvent","mechanics/despawnOnDeath@lib:it.aldinucci.piero.bed.maptool.ruleset","")]
[h: bPC = isPC(source)]
[macro("mechanics/setSpawnerPC@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sSpawner,bPC)]

<!-- Spawn -->
[macro("mechanics/spawnCreatura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sSpawner,sNome,sSizeD)]
[h: oSpawned = macro.return]

<!-- Effetto a tempo per il Despawn -->
[h: sMacroEffetto = "mechanics/servitoreAttivabileEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: param = json.set("","target",source,"effetto",fluffName,"subito",1,"tipo",spellType,"mutex",spellType)]
[h: macroParam = json.set("","creaturaName",oSpawned)]
[h: temp = json.set("","tipo","macroCall","macroName",sMacroEffetto,"parametri",macroParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]


<!-- Assegno servitore-->
[macro("core/setEffettoServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,fluffName)]
[macro("core/setServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,oSpawned)]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]




