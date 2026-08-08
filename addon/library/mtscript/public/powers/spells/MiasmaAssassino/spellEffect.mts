[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MiasmaAssassino"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1d2", "stato","Veleno" )]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]