[h: source = macro.args]

[macro("class-skills/DisattivaTipoAbilita@this"): json.append(source,"ATTIVA")]

[macro("class-skills/getAbilitaInUso@this"): json.append(source,"PECULIARE")]
[h: pecList = macro.return]
[macro("class-skills/getAbilitaInUso@this"): json.append(source,"EROICA")]
[h: pecList = json.merge(pecList,macro.return)]

[h: switchToken(source)]

[h, foreach(item, pecList), code:{
	[oParam = json.append(source,item)]
	[macro("class-skills/getDurataAbilitaInUso@this"): oParam]
	[iDurUso = macro.return]
	[macro("class-skills/getDurataAbilita@this"): json.append(oParam, 1)]
	[iDurata = macro.return]
	[if(iDurata > iDurUso), code:{
		[macro("class-skills/modDurataAbilitaInUso@this"): oParam]
	};{
		[macro("class-skills/DisattivaAbilita@this"): json.append(source,item,1)]
	}]
}]
[macro("updateDialogAbilita@Lib:Scheda"): source]