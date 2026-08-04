[h: source = macro.args]

[macro("class_skills/DisattivaTipoAbilita@this"): json.append(source,"ATTIVA")]

[macro("class_skills/getAbilitaInUso@this"): json.append(source,"PECULIARE")]
[h: pecList = macro.return]
[macro("class_skills/getAbilitaInUso@this"): json.append(source,"EROICA")]
[h: pecList = json.merge(pecList,macro.return)]

[h: switchToken(source)]

[h, foreach(item, pecList), code:{
	[oParam = json.append(source,item)]
	[macro("class_skills/getDurataAbilitaInUso@this"): oParam]
	[iDurUso = macro.return]
	[macro("class_skills/getDurataAbilita@this"): json.append(oParam, 1)]
	[iDurata = macro.return]
	[if(iDurata > iDurUso), code:{
		[macro("class_skills/modDurataAbilitaInUso@this"): oParam]
	};{
		[macro("class_skills/DisattivaAbilita@this"): json.append(source,item,1)]
	}]
}]
[macro("gui/updateDialogAbilita@this"): source]