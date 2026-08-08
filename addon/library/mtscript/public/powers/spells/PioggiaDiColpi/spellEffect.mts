[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "PioggiaDiColpi"]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]
[h: switchToken(source)]
[h: Att_Rimanenti = Att_Rimanenti +1]