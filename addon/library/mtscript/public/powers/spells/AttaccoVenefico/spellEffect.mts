[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "AttaccoVenefico"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato","Veleno","categoria","VELENO")]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]

<!-- Attacco -->
[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]