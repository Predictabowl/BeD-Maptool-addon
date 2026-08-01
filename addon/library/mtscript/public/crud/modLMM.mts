[source = arg(0)]
[sScuola = arg(1)]
[iValue = arg(2)]

[h: switchToken(source)]
[h: bFlag = 0]
[h: iLMM = getStrProp(LMM,sScuola)]


[h, if(isNumber(iLMM)), code:{
	[iLMM = iLMM + iValue]
	[h: LMM = setStrProp(LMM,sScuola,iLMM)]
	[bFlag = 1]
}]

[h: macro.return = bFlag]
