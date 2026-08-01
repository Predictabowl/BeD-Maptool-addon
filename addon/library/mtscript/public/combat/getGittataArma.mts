[h: source = arg(0)]
[h, if(argCount()>1): iArma = arg(1); iArma = getArmaDaUsare(source)]

[h, if(iArma == 2), code:{
	[iPortata = getProperty("Gittata_2",source)]
};{
	[iPortata = getProperty("Gittata",source)]
}]

[h: macro.return = iPortata]