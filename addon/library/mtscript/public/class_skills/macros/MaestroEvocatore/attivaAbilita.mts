[h: source = macro.args]

[h: sNomeAb = "MaestroEvocatore"]

[h: iPP = 2]

[h: addSpellMod(source,"SERVITORE","PP", -iPP)]
[h: addSpellMod(source,"SERVITORE","VA", 10)]

[switchToken(source)]
[h: oServitore = getServitore(source)]
[h, if(oServitore != ""): PP = PP +iPP] 

[h:macro.return = 0]