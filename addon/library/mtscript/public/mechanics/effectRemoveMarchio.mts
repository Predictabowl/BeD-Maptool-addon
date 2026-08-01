[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h:sProp = "PROPRIETARIO"]
[macro("mechanics/getMarchio@this"): json.append(target,sProp)]
[h: oMarchio = macro.return]

[h, if(remove == 1), code:{
	[if(json.isEmpty(oMarchio) == 0), code:{
		[macro("mechanics/removeMarchioSource@this"): target]
	}]
};{
	[sTipo = json.get(oMarchio,"tipo")]
	[listMarchiati = json.get(oMarchio,"targets")]
	[foreach(oID,listMarchiati), code:{
		[macro("mechanics/getMarchio@this"): json.append(oID,sTipo)]
		[oTMarchio = macro.return]
		[oTMarchio = json.set(oTMarchio,"colpiti","")]
		[macro("mechanics/writeMarchioOnToken@this"):json.append(oID,sTipo,oTMarchio)]
	}]
}]
[h: macro.return = ""]


