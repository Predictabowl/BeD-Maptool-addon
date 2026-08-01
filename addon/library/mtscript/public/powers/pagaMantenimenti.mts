[h: source = macro.args]

[h: switchToken(source)]
[h, if(json.type(Mantenimenti) != "OBJECT"): Mantenimenti = "{}"]

[h: listMant = Mantenimenti]

[h, foreach(sMant,listMant), code:{
	[macro("powers/pagaMantenimento@this"): json.append(source,sMant)]
}]