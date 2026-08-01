[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: spellName = json.get(macro.args,2)]
[h, if(argCount()>3): bOpp = arg(3); bOpp = 0]

[h, if(isAoESpell(spellName, source)): fMolt = 1/3; fMolt =1]
[h: bMancareRes = rollMancare(source,target,"",fMolt)]
[h, if(bMancareRes == 1): return(0,0)]

[macro("powers/getSpellCopertura@this"):json.set("","target",target,"spell",spellName,"source",source)]
[h, if(macro.return): return(0,0)]

[macro("powers/checkSpellDifesa@this"):json.set("","target",target,"spell",spellName,"source",source,"isOpport",bOpp)]
[h, if(macro.return == "schivato"): return(0,0)]
[h, if(macro.return == "parato"), code:{
	[sTipo = upper(getLibProperty("tipo", spellName))]
	[if (sTipo != "OFFENSIVO"): return(0,0)]
}]

[h: macro.return = 1]