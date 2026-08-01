[h: source = arg(0)]

[h: switchToken(source)]
[h, if(json.type(Mantenimenti) != "OBJECT"): Mantenimenti = "{}"]

[h: listMant = Mantenimenti]

[h, foreach(sMant,listMant), code:{
	[macro("powers/delMantenimento@this"): json.append(source,sMant)]
}]