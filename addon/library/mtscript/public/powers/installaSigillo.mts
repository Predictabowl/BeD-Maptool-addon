[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellSigillo = json.get(macro.args,"spellSigillo")]
[h: iCD = json.get(macro.args,"CD")]

[macro("powers/getSpellElement@this"): json.set("","source",source,"spellName",spellSigillo)]
[h: sElemento = upper(macro.return)]

[h: sNome = strformat("Sigillo%{sElemento}")]
[h: sMacro = "eventSigillo@Lib:Poteri"]
[h: oParam = json.set("","CD",iCD,"spellSigillo",spellSigillo,"origine",source,"elemento",sElemento)]
[macro("events/eventInstaller@this"): json.set("","name",sNome,"event","On_Spellcast","token",target,"macroName",sMacro,"macroParam",oParam)]