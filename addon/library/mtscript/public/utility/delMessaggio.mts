[h: oParam = arg(0)]
[h, if(json.type(oParam) == "OBJECT"), code:{
	[h: oToken = json.get(arg(0),"token")]
	[h: key = json.get(arg(0),"key")]
}]

[h, if(json.type(oParam) == "ARRAY"), code:{
	[h: oToken = json.get(oParam,0)]
	[h: key = json.get(oParam,1)]
}]

[h, if(json.type(oParam) == "UNKNOWN"), code:{
	[h: oToken = oParam]
	[h: key = arg(1)]
}]

[h: switchToken(oToken)]
[h, if(json.type(Messaggi) != "OBJECT"): Messaggi = "{}"]
[h: Messaggi = json.remove(Messaggi,key)]