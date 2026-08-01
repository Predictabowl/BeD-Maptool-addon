[h: source = macro.args]

[h: switchToken(source)]
[h: sPlayer = getPlayerName()]
[h: bGM = isGM(sPlayer)]

[h, if(bGM), code:{
	[bFlag = 1]
};{
	[h: bOwner = isOwner(sPlayer)]
	[if(bOwner): bFlag = 1; bFlag = 0]
}]

[h: macro.return = bFlag]