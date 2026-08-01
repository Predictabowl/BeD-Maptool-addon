[h: oToken = arg(0)]
[h: iTox = arg(1)]



[h: switchToken(oToken)]
[h: Lista_Dati = setStrProp(Lista_Dati,"LivelloTossine",iTox)]


[macro("mechanics/checkTossico@this"): oToken]
[h: iResult = macro.return]
[h, if(iResult > 0), code:{
	[macro("mechanics/failedToxicEffect@this"): json.append(oToken,macro.return)]
}]

[h: macro.return = iResult]