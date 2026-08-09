[h: source = macro.args]

[switchToken(source)]
[h: sNomeAb = "EnergiaDistruttiva"]
[macro("powers/setEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,0)]
[h: addSpellMod(source, "Offensivo", "PF", -2)]

[h: return(0,"")]