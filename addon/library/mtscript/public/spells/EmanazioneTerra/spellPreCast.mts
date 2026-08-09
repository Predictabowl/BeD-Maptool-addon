[h: source = json.get(macro.args,"source")]
[h: broadcast(macro.args)]

[h: spellName = "EmanazioneTerra"]
[h, macro("powers/DefaultMarchioPrecast@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args, "spellName", spellName)]

[h:return(0,0)]