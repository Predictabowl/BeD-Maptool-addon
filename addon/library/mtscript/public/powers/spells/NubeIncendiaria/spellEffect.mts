[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "NubeIncendiaria"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1", "stato","Incendio", "inizioRound", 1)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]