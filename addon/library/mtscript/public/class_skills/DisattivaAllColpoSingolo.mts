[h: source = json.get(macro.args,0)]

[macro("class_skills/getAbilitaInUso@this"): source]
[h: abList = macro.return]
[h: bFlag = 0]
[h, foreach(item, abList), code:{
	[macro("class_skills/getDurataAbilita@this"): json.append(source,item)]
	[abDurata = upper(string(macro.return))]
	[if(abDurata == "COLPO SINGOLO"), code:{
		[macro("class_skills/DisattivaAbilita@this"): json.append(source,item)]
		[bFlag = 1]
	}]
}]