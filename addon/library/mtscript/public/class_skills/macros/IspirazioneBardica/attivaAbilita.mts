[h: source = arg(0)]
[h: target = getSelected()]

[h:sNomeAb = "IspirazioneBardica"]

[macro("class_skills/getEffettoSonata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,2)]
[h: aMotivoScelto = macro.return]
[h, if(json.isEmpty(aMotivoScelto)), code:{
	[appendMessaggio(source,"strAbilitaAttivata",": Attivazione Cancellata")]	
	[return(0,1)]
}]

[h, macro("class_skills/getDurataAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]
[h: iDurata = macro.return]

[macro("class_skills/createEffettoSonata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(aMotivoScelto,"ALLEATI")]
[h: oEffetto = json.set(macro.return,"source",source, "target", target, "effetto", "Ispirazione Bardica", "durata", iDurata)]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):oEffetto]
[macro("class_skills/setMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb, target)]

[h: macro.return = 0]