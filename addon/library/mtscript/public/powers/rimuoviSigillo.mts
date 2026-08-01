[h: target = json.get(macro.args,"target")]
[h: sElemento = upper(json.get(macro.args,"elemento"))]

[h: sNome = strformat("Sigillo%{sElemento}")]
[h: sMacro = "eventSigillo@Lib:Poteri"]
[macro("events/eventUninstaller@this"): json.set("","name",sNome,"event","On_Spellcast","token",target)]