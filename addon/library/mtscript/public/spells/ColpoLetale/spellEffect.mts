[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "ColpoLetale"]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,spellName)]
[h: iLL = macro.return]
[h: iLP = getLP(source,target,iLL,spellName)]

[h: pushStatModifier(source,"LA",iLP)]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]


