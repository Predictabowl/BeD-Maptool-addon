[h: caster = json.get(macro.args,0)]
[h: sFOF = upper(json.get(macro.args,1))]

[h, if(listContains(sFOF,"NEMICI")), code:{
	 [if(isPC(caster)): return(0,"NPC"); return(0,"PC")]
}]

[h, if(listContains(sFOF,"ALLEATI")), code:{
	 [if(isPC(caster)): return(0,"PC"); return(0,"NPC")]
}]

[h, macro("powers/isControlledSpell@this"): caster]
[h, if(!macro.return): return(0,"TUTTI")]

[h, if(sFOF == "" || listContains(sFOF,"UTILE")), code:{
	[if(isPC(caster)): sFOF = "PC"; sFOF="NPC"]
}]

[h, if(listContains(sFOF,"DANNOSO")), code:{
	[if(isNPC(caster)): sFOF = "PC"; sFOF="NPC"]
}]

[h: macro.return = sFOF]