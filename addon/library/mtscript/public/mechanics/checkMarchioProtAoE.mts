[h: oToken = json.get(macro.args,0)]
[h: spellTargets = json.get(macro.args,1)]

[h: sProt = "PROTEZIONE"]
[h: listaInfranti = ""]

[h, foreach(oID,spellTargets), code:{
	[macro("mechanics/getMarchio@this"): json.append(oID,sProt)]
	[h: oMarchio = macro.return]
	[if(json.isEmpty(oMarchio) == 0), code:{
		[source = json.get(oMarchio,"source")]
		[flag = listContains(spellTargets,source)]
	};{
		[flag = 1]
	}]
	[if(flag == 0): listaInfranti = listAppend(listaInfranti,oID)]
}]

[h: macro.return = listaInfranti]