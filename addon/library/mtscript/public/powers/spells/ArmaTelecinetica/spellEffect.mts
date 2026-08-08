[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "ArmaTelecinetica"]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d4")]

[h: return(0,"")]

