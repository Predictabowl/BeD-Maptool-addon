[h, if(json.type(macro.args) != "OBJECT"): macro.args="{}"]
[h: time = json.get(macro.args,"valore")]
[h: target = json.get(macro.args,"target")]

[macro("utility/isCombat@this"):0]
[h: combat = macro.return]

[h, if (combat==1), code:{
	[h, if(time==""): time = tempo]
	[h, if(target==""): target=getImpersonated()]
	[h: switchToken(target)]
	[h: temp = getInitiative()]
	[h: finish = temp+time]
	[h: setInitiative(finish)]
	[macro("utility/sortIniziativa@this"):0]
}]
