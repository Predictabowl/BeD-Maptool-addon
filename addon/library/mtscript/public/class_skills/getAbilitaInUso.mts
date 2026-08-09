[h, if(json.type(macro.args) == "ARRAY"), code:{
	[h: source = json.get(macro.args,0)]
	[h: lTipo = json.get(macro.args,1)]
};{
	[h: source = macro.args]
	[h: lTipo = ""]
}]

[h: sTag = "abilitaClasseInUso"]
[h: oAbilita = getDaMemoria(source,sTag)]
[h, if(json.type(oAbilita) != "OBJECT"): oAbilita = "{}"]

[h, if(lTipo == ""): return(0,json.fields(oAbilita))]

[h: lReturn = ""]
[h, foreach(item,oAbilita), code:{
	[h: sTipo = fetchClassSkillProp(item,"tipo")]
	[if (listContains(lTipo,sTipo)): lReturn = listAppend(lReturn,item)]
}]

[h: macro.return = lReturn]