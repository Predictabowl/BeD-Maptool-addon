[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: oToken = json.get(macro.args,"token")]
	[h: key = json.get(macro.args,"key")]
	[h: key2 = json.get(macro.args,"key2")]
};{
	[h: oToken = json.get(macro.args,0)]
	[h: key = json.get(macro.args,1)]
	[h: key2 = json.get(macro.args,2)]
}]

[macro("popMessaggio@this"): json.set("","token",oToken,"key",key)]
[macro("appendMessaggio@this"):json.set("","token",oToken,"key",key2,"msg",macro.return)]