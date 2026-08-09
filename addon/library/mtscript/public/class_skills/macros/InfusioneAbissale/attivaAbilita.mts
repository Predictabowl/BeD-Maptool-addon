[h: source = arg(0)]

[h:sNomeAb = "InfusioneAbissale"]

[h: eventInstaller(source, "On_Spellcast_at", sNomeAb, "class_skills/macros/InfusioneAbissale/potenziaLE@lib:it.aldinucci.piero.bed.maptool.ruleset")]

[h: appendMessaggio(source,"strAbilitaAttivata","Le Malattie e Maledizioni lanciate saranno potenziate.")]
[addSpellMod(source, "Malattia", "durata", -4, 0)]
[addSpellMod(source, "Maledizione", "durata", -4, 0)]
[h: macro.return = 0]