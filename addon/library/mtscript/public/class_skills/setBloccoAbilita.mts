[h: source = json.get(macro.args,0)]
[h: sNomeAb = json.get(macro.args,1)]
[h: bBlock = json.get(macro.args,2)]


[h, if(!isNumber(bBlock)), code:{
	[bBlock = 0]
}]

[macro("class_skills/getAbilitaClasse@this"): macro.args]
[h, if(!json.isEmpty(macro.return)), code:{
	[h: oAbilita = json.set(macro.return,"blockOverride",bBlock)]
	[macro("class_skills/setAbilitaClasse@this"):json.append(source,sNomeAb,oAbilita)]
}]

[h: macro.return = bBlock]