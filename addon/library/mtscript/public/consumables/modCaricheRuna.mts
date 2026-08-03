[h: oToken = arg(0)] 
[h: sArma = arg(1)]
[h, if(argCount()>2): iRuna = arg(2); iRuna = 1]
[h, if(argCount()>3): iModCariche = arg(3); iModCariche = -1]
[h, if(argCount()>4): bOverCharge = arg(4); bOverCharge = 0]



[h: oRuna = getRunaFromArma(oToken,sArma,iRuna)]
[h: iCariche = json.get(oRuna,"cariche")]
[h: iMaxCariche = json.get(oRuna,"maxCariche")]
[h, if(!isNumber(iCariche)): iCariche = 0]

[h, if(!isNumber(iMaxCariche) && iModCariche > 0 && !bOverCharge): return(0,iCariche)]

[h: iCariche = iCariche + iModCariche]
[h, if(isNumber(iMaxCariche)), code:{
	[if(iCariche > iMaxCariche): iCariche = iMaxCariche]
}]
[h, if(iCariche < 0): iCariche = 0]

[h, if(!isNumber(iMaxCariche) && iCariche == 0), code: {
	[delRunaFromArma(oToken, sArma, iRuna)]	
};{
	[oRuna = json.set(oRuna,"cariche",iCariche)]
	[setRunaToArma(oToken,sArma,oRuna,iRuna)]
}]

[h: macro.return = iCariche]
