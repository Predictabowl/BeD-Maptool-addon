[h: source = arg(0)]

[h: switchToken(source)]
[h: sMsg = ""]
[h: sNomeAb = "ManoSpettrale"]


[macro("powers/getAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return < 1), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Attivazione FALLITA per mancanza di Frammenti d'anima")]
	[return(0,1)]
}]

[h, macro(buildClassSkillMacroName("ManoSpettrale","calcBonus")): source]
[h: iBonus = macro.return]
[h: addSpellMod(source,"class_skills/isMacroCheckSpellRange5@lib:it.aldinucci.piero.bed.maptool.ruleset","spellRange",iBonus)]

[macro("powers/modAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,-1)]
[sMsg = strformat("%+d Raggio bonus con incantesimi a raggio 5 o inferiore",iBonus)]
[appendMessaggio(source,"strAbilitaAttivata",sMsg)]

[h: macro.return = 0]