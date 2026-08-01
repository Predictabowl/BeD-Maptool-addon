[h: oToken = arg(0)]
[h, if(argCount()>1): jOptions = arg(1); jOptions = "{}"]

[h, if(json.isEmpty(jOptions)), code:{
	[bUseFRM = 1]
};{
	[bUseFRM = json.contains(jOptions,"useFRM")]
}]

[h: iValue = getCarM(oToken)*30]
[h, if(bUseFRM): iValue = roundRoll(iValue + getFRM(oToken))]

[h: macro.return = iValue]