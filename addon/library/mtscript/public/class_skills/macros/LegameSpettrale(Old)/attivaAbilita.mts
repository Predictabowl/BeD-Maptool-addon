[h: source = arg(0)]

[h: target = listGet(getSelected(),0)]
[h: sNomeAb = "LegameSpettrale(Old)"]


[macro("utility/isHostile@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,target)]
[h, if(macro.return), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Bersaglio non valido (ostile)")]
	[return(0,1)]
}]

[iDist = getDistance(source,0,target)]
[h, if(iDist > 20), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Bersaglio fuori portata")]
	[return(0,1)]
}]



[h: addSpellMod(source,"class_skills/isMacroCheckSpellRange05@lib:it.aldinucci.piero.bed.maptool.ruleset","PP",0,0.1)]
[macro("powers/setOrigineAlt@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target)]
[h: eventInstaller(source,"on_Spellstart",sNomeAb,"class_skills/macros/LegameSpettrale(Old)/changeOrigine@lib:it.aldinucci.piero.bed.maptool.ruleset")]

[sMsg = strformat("%s collegato con Legame Spettrale",getName(target))]

[h: appendMessaggio(source,"strAbilitaAttivata",sMsg)]
[h: macro.return = 0]