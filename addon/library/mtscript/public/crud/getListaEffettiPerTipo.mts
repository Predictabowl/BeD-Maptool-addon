[h: oToken = arg(0)]
[h: sTipo = upper(arg(1))]

[h: lEffetti = getEffetti(oToken)]
[h: lMaled = "[]"]
[h, foreach(sEffetto,lEffetti), code:{
	[oEffetto = json.get(lEffetti,sEffetto)]
	[sTipo2 = upper(json.get(oEffetto,"tipo"))]
	[if(listContains(sTipo2,sTipo)): lMaled = json.append(lMaled,sEffetto)]
}]

[h: macro.return = lMaled]
