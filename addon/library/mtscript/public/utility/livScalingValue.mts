[h: aLevels = macro.args]

[h: iReturn = 0]
[h: iLiv = Livello]

[h, foreach(iValue, aLevels), code: {
	[if(iLiv >= iValue): iReturn = iReturn +1]
}]

[h: macro.return = iReturn]