[h: oToken = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]

[macro("mechanics/getMarchio@this"):macro.args]
[h: oMarchio = macro.return]
[h, if(json.isEmpty(oMarchio) == 0), code:{
	[source = json.get(oMarchio,"source")]
};{
	[source = ""]
}]

[h: macro.return = source]