[h: source = arg(0)]
[h: sTipo = arg(1)]

[h: switchToken(source)]
[h, if(json.type(Overrides) != "OBJECT"): Overrides= "{}"]

[h: jOverride = json.get(Overrides,sTipo)]
[h, if(json.isEmpty(jOverride)): jOverride = "{}"]

[h: iOverrideVal = json.get(jOverride,"value")]
[h, if(!isNumber(iOverrideVal)): iOverrideVal = 0]

[h: bPermanent = json.get(jOverride,"permanent")]
[h, if(!isNumber(bPermanent)): bPermanent = 0]

[h, if (iOverrideVal == 0): return(0,0)]

[h, if(!bPermanent), code:{
	[h, if (iOverrideVal <= 1), code:{
		[Overrides = json.remove(Overrides,sTipo)]
		[iOverrideVal = 1]
	};{
		[iOverrideVal = iOverrideVal -1]
		[jOverride = json.set(jOverride,"value",iOverrideVal)]
		[Overrides = json.set(Overrides,sTipo,jOverride)]
	}]
}]

[h: macro.return = min(iOverrideVal,1)]