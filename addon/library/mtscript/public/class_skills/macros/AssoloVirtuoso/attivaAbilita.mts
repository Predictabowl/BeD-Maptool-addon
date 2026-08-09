[h: source = arg(0)]
[h: target = source]

[h:sNomeAb = "AssoloVirtuoso"]

[macro("class_skills/getEffettoSonata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,1)]
[h: aMotivoScelto = macro.return]
[h, if(json.isEmpty(aMotivoScelto)), code:{
	[appendMessaggio(source,"strAbilitaAttivata",": Attivazione Cancellata")]	
	[return(0,1)]
}]

[h: iDurata = fetchClassSkillProp(sNomeAb,"durata")]

[macro("class_skills/createEffettoSonata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(aMotivoScelto,"ALLEATI")]
[h: oEffetto = json.set(macro.return,"source",source, "target", target, "effetto", "Assolo Virtuoso", "durata", iDurata)]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):oEffetto]
[macro("class_skills/setMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb, target)]

[h: macro.return = 0]