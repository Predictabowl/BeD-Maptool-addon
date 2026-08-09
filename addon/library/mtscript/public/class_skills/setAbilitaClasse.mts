[h: source = json.get(macro.args,0)]
[h: nomeAbilita = json.get(macro.args,1)]
[h: oAbilita = json.get(macro.args,2)]

[h: switchToken(source)]
[h: iOldLiv = getLivelloAbilita(source, nomeAbilita)]
[h, if(json.type(Abilita_Classe) != "OBJECT"): Abilita_Classe = "{}"]
[h: Abilita_Classe = json.set(Abilita_Classe,nomeAbilita,oAbilita)]

[h, if(isAbilitaPassiva(nomeAbilita)), code:{
	[jData = json.set("","oldLiv", iOldLiv)]
	[macro("class_skills/getAbilitaPassiva@this"):nomeAbilita]
	[bMacro = json.get(macro.return,"installMacro")]
	[if(bMacro == 1), code:{
		[macroName = strformat("class_skills/%{nomeAbilita}@%s", getMacroLocation())]
		[macro(macroName): json.append(source, 0, jData)]
	}]
}]
