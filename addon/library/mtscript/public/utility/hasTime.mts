[h: oToken = json.get(macro.args,0)]
[h: iTime  = json.get(macro.args,1)]

[macro("isCombat@this"):0]
[h: combat = macro.return]


[h:bResult = 1]
[h, if (combat==1), code:{
	[h: switchToken(oToken)]
	[h: temp = getInitiative()]
	[h: finish = temp-iTime]
	[if(finish < 0): bResult = 0]
}]

[h:macro.return = bResult]

