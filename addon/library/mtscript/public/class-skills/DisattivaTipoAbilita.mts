[h: source = json.get(macro.args,0)]
[h: sTipo = upper(json.get(macro.args,1))]

[macro("class-skills/getAbilitaInUso@this"):macro.args]
[h, foreach(sAbilita,macro.return), code:{
	[macro("class-skills/DisattivaAbilita@this"): json.append(source,sAbilita,1)]
}]