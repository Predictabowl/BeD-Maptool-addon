[h: source = arg(0)]
[h: sTipo = arg(1)]
[h, if(argCount()>2): bPermanent = arg(2); bPermanent = 0]
[h, if(argCount()>3): jOptions = arg(3); jOptions = "{}"]

[h, if(!isNumber(bPermanent)): bPermanent = 0]
[h, if(json.contains(jOptions,"cumulative")): bCumulative = 1; bCumulative = 0]

[h: switchToken(source)]
[h, if(json.type(Overrides) != "OBJECT"): Overrides="{}"]

[h: jOverride = json.get(Overrides,sTipo)]
[h, if(json.type(jOverride) != "OBJECT"): jOverride = "{}"]
[h, if(bCumulative), code:{
	[iOverride = json.get(jOverride,"value")]
	[if(!isNumber(iOverride)): iOverride = 0]
	[iOverride = iOverride +1]
};{
	[iOverride = 1]		
}]
[h: jOverride = json.set(jOverride,"value",iOverride,"permanent",bPermanent)]

[h: Overrides = json.set(Overrides,sTipo,jOverride)]
