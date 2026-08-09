[h: source = arg(0)]

[h:sNomeAb = "SonataLibera"]


[macro("class_skills/applicaAuraSonata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,1)]
[h, if(!macro.return), code:{
	[appendMessaggio(source,"strAbilitaAttivata",": Attivazione Cancellata")]	
	[return(0,1)]
}]

[h: macro.return = 0]