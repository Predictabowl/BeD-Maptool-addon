[h: oToken = arg(0)]
[h: sTipo = upper(arg(1))]
[h, if(argCount()>2): bSet = arg(2); bSet = 1]

[h: oImmunita = getProperty("Immunita", oToken)]
[h, if(json.type(oImmunita) != "ARRAY"): oImmunita = "[]"]

[h, if(!json.contains(oImmunita,sTipo) && bSet == 1), code:{
	[oImmunita = json.append(oImmunita,sTipo)]
}]

[h, if(json.contains(oImmunita,sTipo) && bSet != 1), code:{
	[oImmunita = json.removeFirst(oImmunita,sTipo)]
}]

[h: setProperty("Immunita", oImmunita, oToken)]