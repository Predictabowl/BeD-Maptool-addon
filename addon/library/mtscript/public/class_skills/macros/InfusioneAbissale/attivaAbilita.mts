[h: source = arg(0)]

[h:sNomeAb = "InfusioneAbissale"]

[h: eventInstaller(source, "On_Spellcast_at", sNomeAb, buildClassSkillMacroName("InfusioneAbissale","potenziaLE"))]

[h: appendMessaggio(source,"strAbilitaAttivata","Le Malattie e Maledizioni lanciate saranno potenziate.")]
[addSpellMod(source, "Malattia", "durata", -4, 0)]
[addSpellMod(source, "Maledizione", "durata", -4, 0)]
[h: macro.return = 0]