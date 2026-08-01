[h: source = arg(0)]
[h: target = arg(1)]
[h: origin = arg(2)]
[h: spellName = arg(3)]


[h: bReturn = 1]

[h: switchToken(origin)]
[macro("utility/isHostile@this"): json.append(source,target)]
[h: bHostile =macro.return]

[h: sTipoAOE = upper(getLibProperty("tipo_AOE",spellName))]

[h, macro("powers/isServitoreHittingHimself@this"):json.append(source,target,spellName)]
[h: bServitoreHitHimself = macro.return]
[h, if(listContains(sTipoAOE,"EXCLUDESERVITORE") && bServitoreHitHimself): return (0,0)]

[macro("mobs/getLastTestDL@this"): json.set("","source",source,"spellName",spellName)]
[h: bDL = macro.return]

[h: sTipoBer = "TUTTI"]

[h, if(isAoEHarmfulSpell(spellName)), code:{
	[iSpellRange = getSpellRange(json.append(source,spellName))]
	[h, if(iSpellRange == 0 && source == target): return(0,0)]
	[if(bServitoreHitHimself): return(0,0)]
	[if(bDL ==1): sTipoBer = "NEMICI"]
	[if(listcontains(sTipoAOE,"NEMICI")): sTipoBer = "NEMICI"]
};{
	[if(bDL ==1): sTipoBer = "ALLEATI"]
	[if(listcontains(sTipoAOE,"ALLEATI")): sTipoBer = "ALLEATI"]
}]

[h, switch(sTipoBer), code:
case "ALLEATI":{
	[if(bHostile): return(0,0)]
};
case "NEMICI":{
	[if(!bHostile): return(0,0)]
};
default:{
<!-- colpisce tutti indiscriminatamente -->
}]

[macro("utility/isTokenVisible@this"):json.append(origin,target)]
[h, if(macro.return == 0): return(0,0)]

[macro("powers/isTargetLegal@this"):target]
[h, if(macro.return == 0): return(0,0)]

[h: sShape = upper(getAoEShape(spellName,source))]
[h, switch(sShape), code:
	case "CONO":{
		[macro("utility/isInCone@this"): json.append(origin,target,60)]
		[if(!macro.return): return(0,0)]	
	};
	case "FRONTALE":{
		[macro("utility/isInCone@this"): json.append(origin,target,120,1)]
		[if(!macro.return): return(0,0)]
	};
	case "LINEA":{
		[macro("utility/isInLine@this"): json.append(source,target,origin)]
		[if(!macro.return): return(0,0)]
	};
	default:{}
]


[h: macro.return = bReturn]
