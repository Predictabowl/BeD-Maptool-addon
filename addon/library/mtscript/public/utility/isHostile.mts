[h, if(argCount()>1), code:{
	[source = arg(0)]
	[target = arg(1)]
};{
	[macro.args = arg(0)]
	[h: source = json.get(macro.args,0)]
	[h: target = json.get(macro.args,1)]
}]

[h: bSource = isPC(source)]
[h: bTarget = isPC(target)]

[h: result = bxor(bSource,bTarget)]

[h: macro.return = result]