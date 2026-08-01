[h: source = json.get(macro.args,0)]
[h: value = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): PVTid = json.get(macro.args,2); PVTid= "generico"]

[h: switchToken(source)]
[h, if(json.type(PV_Temporanei) != "OBJECT"): PV_Temporanei="{}"]

[h, if(value > 0), code:{
	[PV_Temporanei = json.set(PV_Temporanei,PVTid,value)]
	[h: value = 0]
}]

[h, foreach(item,PV_Temporanei), code:{
	[itemValue = json.get(PV_Temporanei,item)]
	[if(itemValue+value <= 0), code:{
		[value = value +itemValue]
		[macro("core/removePVT@this"): json.append(source,item)]
	};{
		[itemValue = itemValue + value]
		[PV_Temporanei = json.set(PV_Temporanei,item,itemValue)]
		[value = 0]
	}]
}]

[macro("core/updatePVTScheda@this"): source]
[h: macro.return = -value]