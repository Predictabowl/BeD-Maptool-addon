[h: source = macro.args]

[h: sNomeAb = "EnergiaDistruttiva"]

[macro("powers/setEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]

[h: switchToken(source)]
[h: addSpellMod(source, "Offensivo", "PF", 2)]
[h: eventInstaller(source,"On_Attack",sNomeAb,buildClassSkillMacroName("EnergiaDistruttiva","spellcastEffect"))]

[h: return(0,0)]