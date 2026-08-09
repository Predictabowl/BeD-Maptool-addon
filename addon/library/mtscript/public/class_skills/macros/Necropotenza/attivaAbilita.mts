[h: source = arg(0)]

[h:sNomeAb = "Necropotenza"]

[macro("powers/getAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return < 1), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Attivazione FALLITA per mancanza di Frammenti d'anima")]
	[return(0,1)]
}]

[h: eventInstaller(source, "On_Spellcast_at", sNomeAb, "class_skills/macros/Necropotenza/potenziaLE@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: iMod = 0]
[h: fMod = 0.5]
[addSpellMod(source, "Malattia", "PP", iMod, fMod)]
[addSpellMod(source, "Malattia", "PM", iMod, fMod)]
[addSpellMod(source, "Malattia", "PF", iMod, fMod)]
[addSpellMod(source, "Malattia", "tempo", iMod, fMod)]
[addSpellMod(source, "Maledizione", "PP", iMod, fMod)]
[addSpellMod(source, "Maledizione", "PM", iMod, fMod)]
[addSpellMod(source, "Maledizione", "PF", iMod, fMod)]
[addSpellMod(source, "Maledizione", "tempo", iMod, fMod)]
[h: appendMessaggio(source,"strAbilitaAttivata","Le Malattie e Maledizioni lanciate saranno potenziate.")]
[macro("powers/modAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,-1)]
[h: macro.return = 0]