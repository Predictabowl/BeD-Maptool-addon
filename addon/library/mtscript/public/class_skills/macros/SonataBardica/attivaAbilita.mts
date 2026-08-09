[h: source = arg(0)]

[h:sNomeAb = "SonataBardica"]


[macro("class_skills/applicaAuraSonata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,1)]
[h, if(!macro.return), code:{
	[appendMessaggio(source,"strAbilitaAttivata",": Attivazione Cancellata")]
	[return(0,1)]
}]
[h: switchToken(source)]
[h: PA_Max = PA_Max -1]
[h: PA = PA -1]
[h: macro.return = 0]