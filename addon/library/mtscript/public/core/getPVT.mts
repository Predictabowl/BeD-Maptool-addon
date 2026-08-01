[h: source = macro.args]

[h: value = 0]

[h: switchToken(source)]
[h, if(json.type(PV_Temporanei) != "OBJECT"): PV_Temporanei="{}"]

[h, foreach(item,PV_Temporanei), code:{
	[itemValue = json.get(PV_Temporanei,item)]
	[value = value + itemValue]
}]

[h: macro.return = value]