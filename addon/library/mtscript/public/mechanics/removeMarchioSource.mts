[h: oToken = macro.args]

[h: sProp = "PROPRIETARIO"]
[macro("mechanics/getMarchio@this"): json.append(oToken,sProp)]
[h: oMarchi = macro.return]
[h, if(json.isEmpty(oMarchi) == 0), code:{
	[oTargets = json.get(oMarchi,"targets")]
	[sTipo = json.get(oMarchi,"tipo")]
	[foreach(oID,oTargets), code:{
		[macro("mechanics/removeMarchioTarget@this"):json.append(oID,sTipo)]
	}]
}]
