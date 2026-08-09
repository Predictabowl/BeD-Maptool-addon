[h: source = arg(0)]

[h: sNomeAb = "LegameSpettrale"]

[h, macro("powers/getAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return < 1), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Attivazione FALLITA per mancanza di Frammenti d'anima")]
	[return(0,1)]
}]

[h: eventInstaller(source, "On_Damaged", sNomeAb, buildClassSkillMacroName("LegameSpettrale","dmgRedirect"))]
[h, macro("powers/modAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,-1)]

[h: sMsg = strformat("Collegamento stabilito")]
[h: appendMessaggio(source,"strAbilitaAttivata",sMsg)]
[h: macro.return = 0]