[h: oToken = getSelected()]

[h: sCuraLiv = "1d4+2"]
[h: sCuraBase = "0"]
[h: jCounter = json.append("", "Incendio", "Veleno")]


[h: sEvent = "on_Round_End"]
[h: sNome = "Rigenerazione"]
[h: sMacroName = "monsters/RigenerazioneLivelloEvento@" + getMacroLocation()]
[h: oMacroParam = json.set("","curaLiv",sCuraLiv,"curaBase",sCuraBase, "counter", jCounter)]


[h: eventInstaller(oToken,sEvent,sNome,sMacroName,oMacroParam)]