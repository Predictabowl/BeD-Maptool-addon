[h: source = macro.args]

[h: sNomeAb = "NessunaPieta"]
[h: eventName = sNomeAb+source]

[macro("class_skills/getMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]
[h: target = macro.return]
[h: eventUninstaller(target, "On_Attacked", eventName)]
[macro("class_skills/delMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sNomeAb)]

[h:macro.return = ""]