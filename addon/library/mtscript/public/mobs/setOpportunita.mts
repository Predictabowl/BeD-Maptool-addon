[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: lExclude = json.get(macro.args,"excludeList")]
};{
	[h: source = macro.args]
	[h: lExclude = ""]
}]


[h: switchToken (source)]
[h, if(json.type(Att_Opportunita) != "OBJECT"): Att_Opportunita = "{}"]

[h: Att_opportunita = json.set(Att_Opportunita,"ATTIVA",1)]
[h: jExclude = json.set("","EXCLUDE",1)]
[h, foreach(item,lExclude), code:{
	[Att_Opportunita = json.set(Att_Opportunita,item,jExclude)]
}]