[h: source = json.get(macro.args,0)]
[h: iValue = json.get(macro.args,1)]

[h: sAnime = "FAnima"]

[h: iAnime = getProperty(sAnime,source)]
[h, if(isNumber(iAnime)), code:{
	[iResult = iAnime+iValue]
};{
	[if (iValue > 0): iResult = iValue; iResult = -1]
}]

[h, if(iResult < 0), code:{
	[bReturn = 0]
};{
	[setProperty(sAnime,iResult,source)]
	[bReturn = 1]
}]

[h: macro.return = bReturn]