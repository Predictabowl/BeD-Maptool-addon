[h: boradcast("DEPRECATED:"+getMacroName()+"@"+getMacroLocation())]
[h: source = arg(0)]
[h, if(json.type(source) == "OBJECT"), code:{
	[h: arma = json.get(source,"arma")]
	[h: source = json.get(source,"source")]
};{
	[h: arma = ""]
}]

[h, if (arma == ""), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma = macro.return]
};{}]

[h: switchToken(source)]

[h, if (arma ==2), code:{	
	[h: return = CM2]
};{
	[h: return =  CM]
}]

[macro("core/popStatModifier@this"): json.append(source,"CM")]
[h:return = return + macro.return]
[h: macro.return = return]