[h, if(argCount() > 1), code:{
	[oToken = arg(0)]
	[key = arg(1)]
	[messaggio = arg(2)]
};{
	[oToken = json.get(arg(0),"token")]
	[messaggio = json.get(arg(0),"msg")]
	[key = json.get(arg(0),"key")]
}]


[h: switchToken(oToken)]
[h, if(json.type(Messaggi) != "OBJECT"): Messaggi = "{}"]
[h: Messaggi = json.set(Messaggi,key,messaggio)]