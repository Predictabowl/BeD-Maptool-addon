[h: source = arg(0)]

[h: sNomeAb = "IspirazioneBardica"]

[macro("class_skills/getMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]
[h: target = macro.return]
[h: rimuoviEffetto(target,"Ispirazione Bardica")]
[macro("class_skills/delMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]

[h:macro.return = ""]