[h: fValue = arg(0)]
[h: fSoftCap = arg(1)]
[h: fHardCap = arg(2)]
[h, if(argCount() > 3): fConst = arg(3); fconst = 1]

[h, if(fValue > fSoftCap), code:{
	[fDimCap = fHardCap - fSoftCap]
	[fDimPart = fValue-fSoftCap]
	[fResult = fSoftCap + (fDimPart*fDimCap/(fDimPart+fConst*fDimCap))]
};{
	[fResult = fValue]
}]

[h: macro.return = fResult]