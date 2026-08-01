[h: oToken = arg(0)]

[h: switchToken(oToken)]


[h: aEquip = "[]"]
[h, foreach(key, Accessori), code:{
	[aEquip = json.append(aEquip, json.get(Accessori, key))]
}]
[h: aEquip = json.append(aEquip, Armatura)]
[h: aEquip = json.merge(aEquip, json.fromList(Armi_Equipaggiate))]
[h: aEquip = json.append(aEquip, Scudo_Equipaggiato)]
[h: aEquip = json.merge(aEquip, Armi)]

[h: aEquipKeys = json.fields(Equipaggiamento, "json")]
[h: aFilteredEquip = "[]"]
[h, foreach(key, aEquip), code :{
	[if(json.contains(aEquipKeys, key)): aFilteredEquip = json.append(aFilteredEquip, key)]
}]

[h: macro.return = aFilteredEquip]