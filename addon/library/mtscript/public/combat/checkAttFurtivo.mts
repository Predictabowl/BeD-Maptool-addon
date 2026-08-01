[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[h: switchToken(source)]
[h: bFurtivo = 0]

[h, if(getState("Nascosto",source) == 1), code:{
	[h: sSCap = "Furtivita"]
	[h: sTCap = "Percezione"]
	[macro("mobs/provaContrapposta@this"): json.set("","source",source,"target",target,"sCap",sSCap,"tCap",sTCap)]
	[h: bFurtivo = macro.return]
}]

[h, if(!bFurtivo), code:{
	[macro("mobs/popOverrideAttackerOnTargetFurtivo@this"): json.append(source,target)]
	[bFurtivo = macro.return]
}]

[h: addSpellStartData(source, "InfliggeAttaccoFurtivo", bFurtivo)]
[h: macro.return = bFurtivo]