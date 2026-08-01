[h, if(argCount()>1), code:{
	[source = arg(0)]
	[sTipo = arg(1)]
};{
	[macro.args = arg(0)]
	[source = json.get(macro.args,0)]
	[sTipo = json.get(macro.args,1)]
}]

[h: switchToken(source)]
[h, if (json.type(Overrides) != "OBJECT"): Overrides="{}"]
[Overrides = json.remove(Overrides,sTipo)]
