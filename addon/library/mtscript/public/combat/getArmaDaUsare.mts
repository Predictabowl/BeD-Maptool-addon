[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
};{
	[h: source = arg(0)]
}]

[h: lDatiToken = getProperty("Lista_Dati", source)]
[h: iArmaUsata = getStrProp(lDatiToken,"UltimaArmaUsata")]
[h, if(!isNumber(iArmaUsata)): iArmaUsata = 1]

[h, if(isArmaLancioEquipped(source)), code:{
	[if(getSpellStartData(source,"lancio") == 1): return(0,2)]
}]

[h: return(0, iArmaUsata)]