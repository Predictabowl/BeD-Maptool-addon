[h: oToken = arg(0)]
[h: oData = arg(1)]

[h, if(json.type(oData) != "ARRAY"): return(0,0)]

[h: oMap = "{}"]
[h: aNames = "[]"]
[h, foreach(oItem, oData), code:{
	[sNome = fetchSpellProp(oItem,"nome_decorativo")]
	[oMap = json.set(oMap,sNome,oItem)]
	[aNames = json.append(aNames,sNome)]
}]

[h: aNames = json.sort(aNames)]
[h: oDataMem = "[]"]
[h, foreach(sName, aNames), code:{
	[oDataMem = json.append(oDataMem,json.get(oMap,sName))]
}]

[h: switchToken(oToken)]
[h: Poteri_Conosciuti = json.set(Poteri_Conosciuti, "LIBROINCANTESIMI", oDataMem)]
[h: macro.return = 1]
