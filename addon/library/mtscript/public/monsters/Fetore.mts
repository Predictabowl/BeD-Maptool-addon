<!-- DEPRECATED -->
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: target = listGet(target,0)]

[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: TSType = "Tempra"]
[h: sElement = "Fisico"]

[h: critRes = 0]

[h: iDist = getDistance(target,0,source)]

[h, if(iDist < 2), code:{
	[h: TSParam = json.set("","source",source,"target",target,"element",sElement,"TSType",TSType,"critRes",critRes)]
	[macro("powers/getTSResult@this"):TSParam]
	[h: bTSRes = macro.return]


	[macro("utility/popMessaggio@this"):json.set("","token",source,"key","TSResult")]
	[h: msg = macro.return]

	[h, if(bTSRes == 0), code:{
		[h: durata = 2]
		[h: param = json.set("","target",target,"durata",durata,"effetto","Nausea","moltiplicatore",1)]
		[macro("powers/getParamNausea@this"): param]
		[macro("core/ApplyEffect@this"):json.set(macro.return,"verbose",0)]
		[macro("utility/popMessaggio@this"):json.set("","token",target,"key","msgEffetto")]
		[h: msg = msg +"<br>"+ macro.return]
	}]

	[h: macro.return = "<br>"+msg]
}]



