[h, if(argCount()>1), code:{
	[source = arg(0)]
	[spellName = arg(1)]
	[key = getScuola(source,spellName)]
	[iArma = ""]
};{
	[macro.args = arg(0)]
	[h: source = json.get(macro.args,"source")]
	[h: iArma  = json.get(macro.args,"numArma")] <!-- Opzionale -->
	[h, if(json.contains(macro.args,"scuola")), code:{
		[h: key = json.get(macro.args,"scuola")]
	};{
		[h: spellName = json.get(macro.args,"spell")]
		[key =getScuola(json.set("","token",source,"spell",spellName))]	
	}]
}]

[h, if(key == "Generale"): return(0,1 + floor(getProperty("Livello",source)/6))]

[if(upper(key) == "RUNA"): return(0,0)]

[h: iResult = getStrProp(getProperty("LMM",source),key)]

[h: switchToken(source)]
[h, if(!isNumber(iResult) && iResult != ""): iResult = eval(iResult)]

[h, if(isNumber(iResult)), code:{
	[iResult = iResult + popStatModifier(source,"LMM")]
	[return(0, iResult)]
}]

[h: return(0,-10)]