[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: time = json.get(macro.args,"valore")]
	[h: target = json.get(macro.args,"target")]
};{
	[time = arg(0)]
	[target = arg(1)]
}]

[h, if(!isNumber(time)): return(0,0)]

[h, if (isCombat()), code:{
	[h: switchToken(target)]
	[h: temp = getInitiative()]
	[if(!isNumber(temp)): return(0,0)]
	[h, if(time==""): time = tempo]
	[h, if(target==""): target = getImpersonated()]
	[h: finish = temp+time]
	[h: setInitiative(finish)]
	[macro("utility/sortIniziativa@this"):0]
	[macro.return = 1]
};{
	[macro.return = 0]
}]

