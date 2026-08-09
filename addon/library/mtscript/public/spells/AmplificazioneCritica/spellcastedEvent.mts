[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: jEventParam = json.get(macro.args,"eventParam")]

[h: spellName= json.get(jEventParam, "spellName")]

[h, if(isHarmfulSpell(spellName)), code:{
	[h: pushStatModifier(target, "Crit", 18)]
	[h: pushStatModifier(target, "PCrit", 18)]
}]

[h: macro.return = ""]