[h: source = macro.args]
[macro("isCombat@this"):0]
[h: bCombat = macro.return]

[h, if(bCombat), code:{
	[h: firstT = getInitiativeToken()]
	[h, if(source != firstT), code:{
		[return = 0]
	};{
		[return = 1]
	}]
};{
	[return = 1]
}]

[h: macro.return = return]