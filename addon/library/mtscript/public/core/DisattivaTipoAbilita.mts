[h: source = json.get(macro.args,0)]
[h: sTipo = upper(json.get(macro.args,1))]

[macro("core/getAbilitaInUso@this"):macro.args]
[h, foreach(sAbilita,macro.return), code:{
	[macro("core/DisattivaAbilita@this"): json.append(source,sAbilita,1)]
}]