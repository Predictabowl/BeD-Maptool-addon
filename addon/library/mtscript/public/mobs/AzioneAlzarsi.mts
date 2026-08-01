[h: source = json.get(macro.args,"source")]

[h, if(source ==""): source = getImpersonated()]
[h: switchToken(source)]

[macro("core/payAction@this"): json.set("","token",source,"MM",3)]

[r, if(macro.return ==1), code:{
	[macro("core/RemoveEffect@this"): json.append(source,"Atterrato")]
	[h: bInterrupt = 0]
};{
	[h: bInterrupt = 1]
}]

[h: macro.return = bInterrupt]