[h: source = json.get(macro.args,0)]
[h: nomeAbilita = json.get(macro.args,1)]

[h: switchToken(source)]
[h: iOldLiv = getLivelloAbilita(source, nomeAbilita)]
[h, if(json.type(Abilita_Classe) != "OBJECT"): Abilita_Classe = "{}"]
[h: Abilita_Classe = json.remove(Abilita_Classe,nomeAbilita)]

[h, if(isAbilitaPassiva(nomeAbilita)), code:{
	[jData = json.set("","oldLiv", iOldLiv)]
	[macro("class_skills/getAbilitaPassiva@this"):nomeAbilita]
	[bMacro = json.get(macro.return,"installMacro")]
	[if(bMacro == 1), code:{
		[macro(nomeAbilita+"@this"): json.append(source, 1, jData)]
	}]
}]