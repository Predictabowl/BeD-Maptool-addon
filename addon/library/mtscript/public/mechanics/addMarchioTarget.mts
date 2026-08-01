<!-- aggiunge un bersaglio ad un marchio esistente con proprietario source -->
[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: macroParam = json.get(macro.args,2)]

[h: sProt = "PROTEZIONE"]
[h: sSfida = "SFIDA"]
[h: sProp = "PROPRIETARIO"]

<!-- Aggiungo Target sul lanciatore  -->

[h: flag = 0]
[macro("mechanics/getMarchio@this"): json.append(source,sProp)]
[h: oMarchio = macro.return]

[h, if(json.isEmpty(oMarchio) == 0), code:{
	[oTargets = json.get(oMarchio,"targets")]
	[sTipo = json.get(oMarchio,"tipo")]
	[if(listContains(oTargets,target) == 0), code:{
		[oTargets = listAppend(oTargets,target)]
		[oMarchio = json.set(oMarchio ,"targets",oTargets)]
		[h: oMarchi = getProperty("Marchi",source)]
		[oMarchi = json.set(oMarchi,sProp,oMarchio)]
		[setProperty("Marchi",oMarchi,source)]
		[h: flag = 1]

	}]
}]


<!-- Imposto il marchio sul bersaglio  -->
[h, if(flag == 1), code:{
	[macro("mechanics/removeMarchioTarget@this"):json.append(target,sTipo)]
	[if(sTipo == sProt), code:{
		[macro("mechanics/removeMarchioSource@this"):target]		
	}]
	[h: mTemp = getProperty("Marchi",target)]
	[h: oData = json.set("","source",source,"MacroParam",macroParam)]
	[h: mTemp = json.set(mTemp,sTipo,oData)]
	[h: setProperty("Marchi",mTemp,target)]
	[if(sTipo == sProt): setState("Marchio_di_Protezione",1,target); setState("Marchio_di_Sfida",1,target)]
}]

