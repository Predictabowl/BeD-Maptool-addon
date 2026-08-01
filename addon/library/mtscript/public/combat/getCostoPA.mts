[h: source = arg(0)]
[h, if(json.type(source) == "OBJECT"), code:{
	[h: bOpp = json.get(source,"opportunita")]
	[h: iArma = json.get(source,"arma")]
	[h: bRawValue = json.get(source,"rawValue")]
	[h: source = json.get(source,"source")]
	[if (bRawValue == ""): bRawValue = 0]
	[if (bOpp == ""): bOpp = 0]
};{
	[if (argCount()>1): bOpp = arg(1); bOpp = 0]
	[if (argCount()>2): bRawValue = arg(2);bRawValue = 0]
	[if (argCount()>3): iArma = arg(3); iArma = ""]
}]

[h, if(!isNumber(iArma)): iArma = getArmaDaUsare(source)]

[h, if(!isNumber(bRawValue)): bRawValue = 0]

[h: sStile = getProperty("Stile",source)]
[h: iPA_Attacco = getProperty("PA_Attacco",source)]

[h, if(!bRawValue && iArma < 2), code:{
	[macro("combat/isStile2A@this"):source]
	[if(macro.return): iPA_Attacco = iPA_Attacco -1 ]
}]

[h, if(bOpp == 1): iPA_Attacco = 1]

[h: macro.return = iPA_Attacco]