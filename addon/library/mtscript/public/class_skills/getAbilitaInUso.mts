[h: source = arg(0)]
[h, if(argCount() > 1): lTipo = arg(1); lTipo = ""]

[h: sTag = "abilitaClasseInUso"]
[h: oAbilita = getDaMemoria(source,sTag)]
[h, if(json.type(oAbilita) != "OBJECT"): oAbilita = "{}"]

[h, if(lTipo == ""): return(0,json.fields(oAbilita))]

[h: lReturn = ""]
[h, foreach(item,oAbilita), code:{
	[h: sTipo = fetchClassSkillProp(item,"tipo")]
	[if (listContains(lTipo,sTipo)): lReturn = listAppend(lReturn,item)]
}]

[r: lReturn]
[h: return(0,lReturn)]