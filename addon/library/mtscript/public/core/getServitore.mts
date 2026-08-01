[h: source = arg(0)]

[h: switchToken(source)]
[macro("core/getEffettoServitore@this"): source]
[h: sEffetto = macro.return]
[h: sReturn = ""]
[h, if(sEffetto != ""), code:{
	[macro("core/getEffect@this"): json.append(source,sEffetto)]
	[oEffetto = macro.return]
	[if(!json.isEmpty(oEffetto)), code:{
		[sReturn = findToken(json.get(oEffetto,"Servitore"))]
	}]
}]

[h: macro.return = sReturn]