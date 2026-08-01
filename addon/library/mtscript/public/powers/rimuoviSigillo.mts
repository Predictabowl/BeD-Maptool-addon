[h: target = json.get(macro.args,"target")]
[h: sElemento = upper(json.get(macro.args,"elemento"))]

[h: sNome = strformat("Sigillo%{sElemento}")]
[h: sMacro = "powers/eventSigillo@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[macro("events/eventUninstaller@this"): json.set("","name",sNome,"event","On_Spellcast","token",target)]