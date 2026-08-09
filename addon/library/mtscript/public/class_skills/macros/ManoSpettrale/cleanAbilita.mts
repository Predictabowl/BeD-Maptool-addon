[h: source = macro.args]

[h: sNomeAb = "ManoSpettrale"]
[h: iBonus = getLivelloAbilita(source,sNomeAb)*3]
[h: addSpellMod(source,"class_skills/isMacroCheckSpellRange5@lib:it.aldinucci.piero.bed.maptool.ruleset","spellRange",-iBonus)]

[h:macro.return = ""]