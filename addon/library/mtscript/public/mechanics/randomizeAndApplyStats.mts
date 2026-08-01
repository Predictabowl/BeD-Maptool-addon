[h: oToken = arg(0)]
[h: fRand = arg(1)]

[macro("mechanics/arrayStatKeysToLiv@this"): 0]
[h: aStats = macro.return]

[h, foreach(sKey, aStats), code:{
	[iValue = getProperty(sKey, oToken)]
	[fRoll = 1+(roll(1,1000)-500)*fRand/500]
	[iValue = roundRoll(iValue*fRoll)]
	[setProperty(sKey,iValue,oToken)]
}]
