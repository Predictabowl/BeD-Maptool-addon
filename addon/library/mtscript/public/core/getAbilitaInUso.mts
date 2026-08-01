[h, if(json.type(macro.args) == "ARRAY"), code:{
	[h: source = json.get(macro.args,0)]
	[h: sTipo = json.get(macro.args,1)]
};{
	[h: source = macro.args]
	[h: sTipo = "ATTIVA,ASECONDARIA,PECULIARE"]
}]

[h: switchToken(source)]
[h: return = ""]
[h, foreach(item,sTipo), code:{
	[h: sTipoId = "ABILITA"+upper(item)]
	[h: abUso = getStrProp(Lista_Dati,sTipoId)]
	[if(abUso != ""): return = listAppend(return,abUso)]
}]

[h: macro.return = return]