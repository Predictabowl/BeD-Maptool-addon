[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[macro("core/getEffettoServitore@this"):source]
[h: sEffetto = macro.return]
[h: bCheck = 0]
[h, if(sEffetto != ""), code:{
	[macro("core/getEffect@this"): json.append(source,sEffetto)]
	[oEffetto = macro.return]
	[if(!json.isEmpty(oEffetto)), code:{
		[oEffetto = json.set(oEffetto,"Servitore",target)]
		[macro("core/setEffect@this"):json.append(source,sEffetto,oEffetto)]
		[bCheck = 1]
	}]
}]

[h: macro.return = bCheck]