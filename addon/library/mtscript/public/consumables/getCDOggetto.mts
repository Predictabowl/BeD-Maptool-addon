[h: oOggetto = arg(0)]

[h, if(isNumber(oOggetto)), code:{
	[iLiv = oOggetto]
};{
	[h, macro("consumables/getLivelloOggetto@this"): macro.args]
	[h: iLiv = macro.return]
}]


[h: macro.return = 14 + floor(iLiv/2)]