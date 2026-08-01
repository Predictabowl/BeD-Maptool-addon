[h: source = arg(0)]
[h: target = arg(1)]
[h, if(argCount()>2), code:{
	[bOpp = arg(2)]
};{
	[macro("isOpportunita@Lib:Combattimento"): json.append(source,target)]
	[bOpp = macro.return]
}]

[h, if(getOverride(target,"noSpalle")): return(0,0)]
[h, if(getOverride(target,"forzaSpalle")): return(0,1)]
[h: bOverride = getProperty("Spalle_Override",target)]
[h, if(bOverride>0): return(0,1)]
[h, if(bOpp == 1): return(0,1)]


[macro("core/PosRelativa@this"): json.append(source,target)]
[h, if(macro.return == "spalle"): return(0,1)]

[h: macro.return = 0]
