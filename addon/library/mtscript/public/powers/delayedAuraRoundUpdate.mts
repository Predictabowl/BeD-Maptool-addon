[h: sOwner = json.get(macro.args,"auraOwner")]
[h: sIdAura = json.get(macro.args,"idAura")]

[h: aParams = json.append(sOwner, sIdAura)]
[h, macro("events/addDelayedSafeMacro@this"): json.append("powers/updateSingleAura@lib:it.aldinucci.piero.bed.maptool.ruleset", aParams)]