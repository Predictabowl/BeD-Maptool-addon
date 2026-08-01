[h: source = arg(0)]
[h, if(argCount()>1): arma = arg(1); arma = ""]

[h, if(!isNumber(arma)), code:{	
	[macro("combat/getArmaDaUsare@this"): source]
	[h: arma = macro.return]
}]

[h: oArma = getArma(source,arma)]
[h: iLASp = getProperty("LA_Spalle",source) + getArmaStat(oArma,"LA Spalle")]

[h: iLASp = iLASp + getStatModifier(source, "LA_Spalle")]

[h: return(0,iLASp)]