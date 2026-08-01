[h: oToken = json.get(macro.args,0)]
[h: sTipo = upper(json.get(macro.args,1))]

[h: sProp = "PROPRIETARIO"]
[h: sProt = "PROTEZIONE"]

[macro("mechanics/getMarchio@this"): json.append(oToken,sTipo)]
[h: oMarchio = macro.return]
[h, if(json.isEmpty(oMarchio) == 0), code:{
	[h: oMarchi = getProperty("Marchi",oToken)]
	[source = json.get(oMarchio,"source")]
	[macro("mechanics/getMarchio@this"): json.append(source,sProp)]
	[oMProp = macro.return]
	[sMacroName = json.get(oMProp,"MacroRemove")]
	[if (sMacroName != ""), code:{
		[macroParam = json.get(oMProp,"MacroParam")]
		[macro(sMacroName): json.set(macroParam,"target",oToken,"source",source,"remove","SINGLETARGET")]
	}]
	
	[macro("mechanics/delMarchio@this"): json.append(oToken,sTipo)]

	[oTargets = json.get(oMProp,"targets")]

	<!-- rimozione proprietario se non ci sono più target -->
	[h: numTargets = listCount(oTargets)]
	[if((numTargets == 1) && (sMacroName != "")), code:{
		[macroParam = json.get(oMProp,"MacroParam")]
		[macro(sMacroName): json.set(macroParam,"source",source,"target",oToken,"remove",sProp)]
	}]

	[if(numTargets == 1), code:{
		[sNomeEffetto = json.get(oMProp,"NomeEffetto")]
		[macro("mechanics/delMarchio@this"): json.append(source,sProp)]
		[macro("core/RemoveEffect@this"):json.append(source,sNomeEffetto)]
	};{
		[oTargets = listDelete(oTargets,listFind(oTargets,oToken))]
		[oMprop = json.set(oMProp ,"targets",oTargets)]
		[oSMarchi = json.set(getProperty("Marchi",source),sProp,oMProp)]
		[setProperty("Marchi",oSMarchi,source)]
	}]

	[if(sTipo == sProt): sState = "Marchio_di_Protezione"; sState = "Marchio_di_Sfida"]
	[setState(sState,0,oToken)]
}]

