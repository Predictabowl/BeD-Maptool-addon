[h: source = macro.args]

[h: sNomeAb = "MaestroEvocatore"]

[h: iPP = 2]

[h: addSpellMod(source,"SERVITORE","PP", -iPP)]
[h: addSpellMod(source,"SERVITORE","VA", 15)]

[switchToken(source)]
[h: oServitore = getServitore(source)]
[h, if(oServitore != ""): PP = PP +iPP] 
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "PP"), 0, "all")]

[h:macro.return = 0]