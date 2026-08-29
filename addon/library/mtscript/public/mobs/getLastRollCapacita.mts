[h: source = json.get(macro.args,0)]
[h: sCap = json.get(macro.args,1)]

[h: switchToken(source)]
[h: result = json.get(Capacita,sCap)]
[h, if(json.isEmpty(result)), code:{
	[macro("mobs/rollCapacita@this"): macro.args]
	[result = macro.return]
}]

[h: macro.return = result]