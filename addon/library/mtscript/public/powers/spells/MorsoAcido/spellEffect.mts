[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "MorsoAcido"]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target)]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1d4","inizioRound",0)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
