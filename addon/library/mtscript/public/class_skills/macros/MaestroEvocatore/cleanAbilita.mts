[h: source = macro.args]

[h: iPP = 2]

[h: addSpellMod(source,"SERVITORE","PP", iPP)]
[h: addSpellMod(source,"SERVITORE","VA", -15)]

[h: switchToken(source)]
[h: PA = PA - iPP]
[h, macro("gui/clearSpellStatsFromCache@this"): source]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "PP"), 0, "all")]

[h:macro.return = ""]