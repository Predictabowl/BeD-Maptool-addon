[h: oOggetto = arg(0)]

[h, if(isNumber(oOggetto)), code:{
	[iLiv = oOggetto]
};{
	[h: iLL = json.get(oOggetto,"LL")]
	[h, if(isNumber(iLL)): return(0, iLL)]
	[h, macro("consumables/getLivelloOggetto@this"): macro.args]
	[h: iLiv = macro.return]
}]


[h: iLL = 2+floor(iLiv*0.62)]
[h: macro.return = iLL]