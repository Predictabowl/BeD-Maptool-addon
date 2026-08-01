[h: source = arg(0)]
[h: target = arg(1)]
[h, if(argCount() > 2): jOptions= arg(2); jOptions = "{}"]

[h, if(isIndifeso(target)): return(0, 1)]

[h, if(getPropertyType(source) != "Basic"): return(0,0)]
[h, if(isStileDistanza(source)): return(0,0)]

[h, if(json.contains(jOptions,"arma")): iArma = json.get(jOptions,"arma"); iArma = ""]
[h, if(!isNumber(iArma)): iArma = getArmaDaUsare(source)]
[h: oArma = getArma(source,iArma)]
[macro("isArmaLancio@Lib:EquipEffect"): oArma]
[h, if(macro.return): return(0,0)]


[h: bReturn = 0]
[h: bBlockOpp = getOverride(source,"bloccaOpportunitaOverride")]
[h, if(bBlockOpp): return(0,0)]


[h, if(getPropertyType(target) == "Basic"), code:{
	[macro("popOverrideAttackerOnTargetOpp@Lib:TokenMacros"): json.append(source,target)]
	[h, if(macro.return): return(0,1)]

	[h, if(popOverride(target,"forzaSubisceOpportunita")): return(0,1)]
	
	[macro("utility/popOpportOverride@this"): json.append(source,target)]
	[h: bReturn = macro.return]
}]

[h, if(bReturn == 0), code:{
	[macro("isOpportunitaAvailable@Lib:TokenMacros"): json.append(source,target)]
	[bReturn = macro.return]
}]


[h, if(bReturn == 0), code:{
	[macro("combat/isAttFurtivo@this"): source]
	[h: bReturn = macro.return]
}]

[h: macro.return = bReturn]