[h: oParam = arg(0)]
[h, if(json.type(oParam) == "OBJECT"), code:{
	[h: oToken = json.get(oParam,"token")]
	[h: key = json.get(oParam,"key")]
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
[h: macro.return = json.get(Messaggi,key)]