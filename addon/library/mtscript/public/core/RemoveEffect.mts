[h, if(argCount()>1), code:{
	[target = arg(0)]
	[effetto = arg(1)]
};{
	[macro.args = arg(0)]
	[h: target = json.get(macro.args,0)]
	[h: effetto = json.get(macro.args,1)]
}]
[h: str = ""]
[h: flag = getProperty("Lista_Effetti",target)]
[r, if(json.isEmpty(flag) != 1), code:{
	[h: flag = json.get(flag,effetto)]
	[r, if(json.isEmpty(flag) == 0), code:{
		[macro("core/RemoveEffectCode@this"):macro.args]
		[h: str = macro.return]
	};{}]
};{}]
[h: macro.return = str]
