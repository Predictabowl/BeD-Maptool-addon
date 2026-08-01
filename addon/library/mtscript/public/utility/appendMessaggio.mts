[h: oParam = arg(0)]
[h, if(json.type(oParam) == "OBJECT"), code:{
	[h: oToken = json.get(arg(0),"token")]
	[h: messaggio = json.get(arg(0),"msg")]
	[h: key = json.get(arg(0),"key")]
}]

[h, if(json.type(oParam) == "ARRAY"), code:{
	[h: oToken = json.get(arg(0),0)]
	[h: key = json.get(arg(0),1)]
	[h: messaggio = json.get(arg(0),2)]
}]

[h, if(json.type(oParam) == "UNKNOWN"), code:{
	[oToken = arg(0)]
	[key = arg(1)]
	[messaggio = arg(2)]
}]

[h, if(messaggio == ""): return (0,"")]
[h: old = trim(getMessaggio(oToken,key))]
[h, if(old != ""): old = old+"<br>"]
[h: setMessaggio(oToken,key,old+messaggio)]