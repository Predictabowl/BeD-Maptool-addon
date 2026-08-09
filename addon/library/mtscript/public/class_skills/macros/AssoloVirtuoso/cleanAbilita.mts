[h: source = arg(0)]

[h: sNomeAb = "AssoloVirtuoso"]

[macro("class_skills/getMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]
[h: target = macro.return]
[h: rimuoviEffetto(target,"Assolo Virtuoso")]
[macro("class_skills/delMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]

[h:macro.return = ""]