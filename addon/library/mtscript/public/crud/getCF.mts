[h: boradcast("DEPRECATED:"+getMacroName()+"@"+getMacroLocation())]
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

[h, if (arma ==2), code:{	
	[h: return = CF2]
};{
	[h: return =  CF1]
}]

[h:return = return + popStatModifier(source,"CF")]
[h: macro.return = return]