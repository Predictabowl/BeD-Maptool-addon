[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
};{
	[h: source = arg(0)]
}]


[h: sStile = getProperty("Stile",source)]
[h: result = 1]
[h, if(sStile=="2A"), code:{
	[lDatiToken = getProperty("Lista_Dati",source)]
	[iArmaUsata = getStrProp(lDatiToken,"UltimaArmaUsata")]
	[if(!isNumber(iArmaUsata)): iArmaUsata = 1]
	[result = math.mod(iArmaUsata+1,2)+1]
	[return (0,result)]
}]

[h, if(isArmaLancioEquipped(source)), code:{
	[if(getSpellStartData(source,"lancio") == 1): return(0,2)]
}]

[h: macro.return = 1]