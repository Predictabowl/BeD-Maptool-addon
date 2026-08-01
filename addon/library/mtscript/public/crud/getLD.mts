[h: source = arg(0)]
[h, if(argCount() > 1): lType = arg(1); lType = ""]


[h: iReturn = getProperty("LD",source)]

[h: iTypeVal = 100000]
[h, foreach(sType, lType), code: {
	[iVal = getProperty("LD_" + sType,source)]
	[iVal = iVal + getStatModifier(source,"LD_" + sType)]
	[if(iVal < iTypeVal): iTypeVal = iVal]
}]

[h, if(listCount(lType) == 0): iTypeVal = 0]


[h: iReturn = iReturn + getStatModifier(source,"LD") + iTypeVal]
[h: macro.return = iReturn]