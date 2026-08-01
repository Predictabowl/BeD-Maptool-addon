[h: oToken = json.get(macro.args,0)]
[h: spellTargets = json.get(macro.args,1)]

[h: sSfida = "SFIDA"]
[macro("mechanics/getMarchio@this"): json.append(oToken,sSfida)]
[h: oMarchio = macro.return]

[h, if(json.isEmpty(oMarchio) == 0), code:{
	[source = json.get(oMarchio,"source")]
	[if(listContains(spellTargets,source) == 1): result = 0; result = 1]
};{
	[result = 0]
}]

[h: macro.return = result]