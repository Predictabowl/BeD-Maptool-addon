[h: oToken = arg(0)]
[h: oTipo = upper(arg(1))]

[h, if(json.type(oTipo) != "ARRAY"): oTipo = json.append("",oTipo)]

[h: oImmunita = getProperty("Immunita", oToken)]
[h, if(json.type(oImmunita) != "ARRAY"): oImmunita = "[]"]
[h: bImmune = 0]
[h: aImm = json.intersection(oImmunita, oTipo)]
[h, if(!json.isEmpty(aImm)): bImmune = 1]
[h, if(json.contains(oImmunita,"TUTTO")): bImmune = 1]
[h, if(json.contains(oTipo,"IRRESISTIBILE")): bImmune = 0]
[h, if(json.contains(oTipo,"NASCOSTO")): bImmune = 0]


[h: macro.return = bImmune]