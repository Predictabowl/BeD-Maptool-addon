[h: oToken = arg(0)]

[h: sNomeAb = "PotenzaEmpia"]
[h, macro("class_skills/activateNecrofuria@lib:it.aldinucci.piero.bed.maptool.ruleset"): oToken]
[h: bNecrofuria = macro.return]
[h, if(bNecrofuria), code: {
	[iLA = 3]
	[jParam = json.set("", "critMod", 9)]
	[h: appendMessaggio(oToken,"strAbilitaAttivata","Necrofuria attivata")]
}; {
	[iLA = 2]
	[jParam = json.set("", "critMod", 6)]
}]

[h: setInMemoria(oToken, sNomeAb, bNecrofuria)]

[h: switchToken(oToken)]
[h: LA = LA + iLA]
[h: eventInstaller(oToken, "On_Spellcast_at", sNomeAb, buildClassSkillMacroName("PotenzaEmpia","spellCastEvent"), jParam)]
[h: eventInstaller(oToken, "On_Attack", sNomeAb, buildClassSkillMacroName("PotenzaEmpia","attackEvent"), jParam)]

[h: macro.return = 0]
