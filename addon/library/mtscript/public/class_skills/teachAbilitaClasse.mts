[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]
[h: iLivello = json.get(macro.args,2)]

[h, if(iLivello>0), code:{
	[oAbilita = json.set("","livello",iLivello)]
	[macro("class_skills/setAbilitaClasse@this"):json.append(oToken,sLibAbilita,oAbilita)]
};{
	[macro("class_skills/delAbilitaClasse@this"):json.append(oToken,sLibAbilita)]
}]