[h, if(json.type(macro.args) == "ARRAY"), code:{
	[h: target = arg(0)]
	[iMaxRange = arg(1)]
};{
	[h: target = macro.args]
	[iMaxRange = ""]
}]


[macro("powers/getAuraSource@this"):0]
[h: sourceList = macro.return]

[h, foreach(source,sourceList,","), code:{
	[macro("powers/updateAllSourceAura@this"): json.append(source,target,iMaxRange)]
}]
