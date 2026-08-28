[h: source = macro.args]

[h: iPP = 2]

[h: addSpellMod(source,"SERVITORE","PP", iPP)]
[h: addSpellMod(source,"SERVITORE","VA", -15)]

[h: switchToken(source)]
[h: PA = PA - iPP]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "VA")]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "PP")]

[h:macro.return = ""]