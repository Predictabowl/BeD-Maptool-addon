[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oEventParam = json.get(macro.args,"eventParam")]


[h: oParam = ""]
[h, if(json.contains(oEventParam,"spellName")), code:{
	[sSpellAttack = json.get(oEventParam, "spellName")]
	[sTipoSpell = upper(getLibProperty("tipo", sSpellAttack))]
	[if (sTipoSpell != "OFFENSIVO"): return(0,"")]
	[oParam = json.set("","spellNameAtt",json.get(oEventParam,"spellName"))]
}]

[macro("events/eventInstaller@this"): json.set("","token",source,"event","On_Damaged","name","SpellCastingDamageInterrupt","macroName","events/SpellCastingDamageInterrupt@it.aldinucci.piero.bed.maptool.ruleset","macroParam",oParam)]

[h: oSafetyParam = json.set("","origine",target)]
[macro("events/eventInstaller@this"): json.set("","token",target,"event","On_Action_End","name","SpellCastingInterruptSafety","macroName","events/SpellCastingInterruptSafety@it.aldinucci.piero.bed.maptool.ruleset","macroParam",oSafetyParam)]
[macro("events/eventInstaller@this"): json.set("","token",target,"event","On_Action_Interrupt","name","SpellCastingInterruptSafety","macroName","events/SpellCastingInterruptSafety@it.aldinucci.piero.bed.maptool.ruleset","macroParam",oSafetyParam)]

[h: macro.return = ""]
