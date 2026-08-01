[h: oToken = macro.return]

[h: bResult = 0]
[macro("isCombat@this"):0]
[h. if(macro.return), code:{
	[iInit = getInitiative(oToken)]
	[if(isNumber(iIni)): bResult = 1]
}]


[h: macro.return = bResult]