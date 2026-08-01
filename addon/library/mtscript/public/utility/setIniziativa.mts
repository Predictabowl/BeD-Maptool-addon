[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: target = json.get(macro.args,"target")]
	[h: iTime = json.get(macro.args,"valore")]
};{
	[target = arg(0)]
	[iTime = arg(1)]
}]

[h, if(!isNumber(iTime)): return (0,0)]
[h, if (!isCombat()): return (0,0)]

[h: bCheck = addToInitiative(0, iTime, target)]
[h, if(!bCheck): setInitiative(iTime,target)]
[macro("sortIniziativa@this"):0]

[h: macro.return = 1]
