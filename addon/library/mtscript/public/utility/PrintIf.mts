[h: var = json.get(macro.args,0)]
[h: value = json.get(macro.args,1)]
[h: str = json.get(macro.args,2)]
[h: str2 = ""]
[h, if (json.length(macro.args)>3), code:{
	[str2 = json.get(macro.args,3)]
}]
[r, if (var == value ), code: {
	[r: str]
	[h: macro.return = str]
};{
	[r:str2]
	[h: macro.return= str2]
}]