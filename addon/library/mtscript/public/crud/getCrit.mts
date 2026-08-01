[h: source = arg(0)]
[h, if(argCount()>1), code:{
	[h: arma = arg(1)]
};{
	[h: arma = ""]
}]
[h, if (!isNumber(arma)), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma = macro.return]
}]

[h: switchToken(source)]

[h: iStat = (Precisione + Conoscenza -10)*3 + Presenza -5]
[h: oArma = getArma(source,arma)]
[h: iACrit = getArmaStat(oArma,"Crit")]
[h: iReturn = Crit + iACrit + iStat + getStatModifier(source,"Crit")]

[h: macro.return = iReturn]