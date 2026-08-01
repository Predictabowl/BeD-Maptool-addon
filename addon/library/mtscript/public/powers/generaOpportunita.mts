[h: source = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount() > 2): target = arg(2); target = ""] <!-- Unused for now, will be used later, with Inquisitor -->

[h: opport = getLibProperty("opportunita",spellName)]
[h, if(opport != 0), code:{
	[macro("core/getOverride@this"):json.append(source,"SpellRangeTouch")]
	[if (macro.return > 0): opport = 0]
}]

[h, if(opport != 0), code:{
	[bOpp = getOverride(source,"NoOpportunita")]
	[if (bOpp > 0): opport = 0]
}]
[h, if(opport != 0), code:{
	[macro("mobs/getDifendersi@this"): source]
	[if(macro.return): opport = 0]
}]

[h, if(isNumber(opport)): return(0, opport)]

[h: opport = upper(opport)]
[h, if(opport == "STILE"), code:{
	[if (isStileDistanza(source)): return(0,1); return(0,0)]
};{
	[opport = 1]
}]

[h: macro.return = opport]