[h: source = macro.args]

[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("ColpireAlleSpalle","calcBonus")): source]
[h: iBonus = macro.return]
[h: LA_Spalle = LA_Spalle + iBonus]
[macro("class_skills/setMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, "ColpireAlleSpalle", iBonus)]

[h: appendMessaggio(source,"strAbilitaAttivata", strformat("+%d LA alle spalle", iBonus))]
[h: macro.return = 0]
