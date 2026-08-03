[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h, if(argCount()>2): iRuna = arg(2); iRuna = 1]

[h: oRuna = getRunaFromArma(oToken,sArma,iRuna)]
[h, if(!json.isEmpty(oRuna)), code:{
	[h: iCariche = json.get(oRuna,"cariche")]
	[h, if(!isNumber(iCariche)): iCariche = 0]
};{
	[iCariche = 0]
}]
[h: macro.return = iCariche]