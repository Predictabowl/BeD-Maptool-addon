[h: aIncrease = arg(0)]
[h, if(argCount()>1): fPerLiv = arg(1); fPerLiv = ""]
[h, if(argCount()>2): oToken = arg(1); oToken = ""]

[h, if(!isNumber(fPerLiv)): fPerLiv = 8/29]
[h, if(oToken != ""): switchToken(oToken)]

[h: iCarPoints = floor(Livello*fPerLiv)]


[h: iValue = 0]
[h, foreach(iItem, aIncrease), code:{
	[if(iCarPoints >= iItem && iItem > 0): iValue = iValue +1]
}]

[h: macro.return = iValue]