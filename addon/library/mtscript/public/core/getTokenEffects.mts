[h: target = arg(0)]
[h, if(argCount() > 1): jOptions = arg(1); jOptions = ""]

[h: bNascosto = 0]
[h: bProtetto = 0]
[h: bTutti = 0]
[h, if(!json.isEmpty(jOptions)), code:{
	[if(json.contains(jOptions,"nascosto")): bNascosto = 1]
	[if(json.contains(jOptions,"protetto")): bProtetto = 1]
	[if(json.contains(jOptions,"tutti")): bTutti = 1]
}]

[h: switchToken(target)]
[h, if(bTutti): return(0, json.fields(Lista_Effetti,"json"))]

[h: aList = "[]"]
[h, foreach(i,Lista_Effetti), code:{
	[oEffect = json.get(Lista_Effetti,i)]
	[sTipo = upper(json.get(oEffect,"tipo"))]
	[if(sTipo != "NASCOSTO" && sTipo != "PROTETTO"):  aList = json.append(aList,i)]
}]
[h: macro.return = aList]