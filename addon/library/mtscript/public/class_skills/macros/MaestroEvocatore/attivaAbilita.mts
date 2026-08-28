[h: source = macro.args]

[h: sNomeAb = "MaestroEvocatore"]

[h: iPP = 2]

[h: addSpellMod(source,"SERVITORE","PP", -iPP)]
[h: addSpellMod(source,"SERVITORE","VA", 15)]

[switchToken(source)]
[h: oServitore = getServitore(source)]
[h, if(oServitore != ""): PP = PP +iPP] 
[h, macro("gui/updateSpellsResource@this"): json.append(source, "VA")]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "PP")]

[h:macro.return = 0]