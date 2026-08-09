<-- DEPRECATED -->
[h: source = json.get(macro.args,0)]
[h: sNome = json.get(macro.args,1)]

[macro("core/getAbilitaClasse@this"):json.append(source,sNome)]
[h: oAbilita = macro.return]
[h, if(json.isEmpty(oAbilita) != 1), code:{
	[h: sClasse = json.get(oAbilita,"Classe")]
	[h: oStats = getLibProperty(sNome,sClasse)]
};{
	[h: oStats = ""]
}]

[h: macro.return = oStats]