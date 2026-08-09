[h: source = macro.args]

[h: sNomeAb = "ColpireAlleSpalle"]

[macro("class_skills/getMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]
[h: iBonus = macro.return]
[h: switchToken(source)]
[h: LA_Spalle = LA_Spalle - iBonus]
[macro("class_skills/delMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]

[h:macro.return = ""]