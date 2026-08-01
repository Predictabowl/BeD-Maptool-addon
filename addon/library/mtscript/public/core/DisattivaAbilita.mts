[h: source = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2) : disOverride = json.get(macro.args,2); disOverride = 0]
[h: switchToken(source)]

[h: bSuccess = 1]

[macro("core/isAbilitaInUso@this"): json.append(source,sAbilita)]
[h, if(macro.return != 1): return(0,bSuccess)]

[macro("core/getStatsAbilita@this"): json.append(source,sAbilita)]
[h, if(macro.return != ""), code:{
	[oStats = macro.return]
	[h: sDurata = upper(getStrProp(oStats,"durata"))]
	[if(sDurata != "TERMINEROUND" || disOverride == 1), code:{
		[h: sAbilitaTag = json.append(source,sAbilita)]
		[macro("core/getAbilitaClasse@this"):sAbilitaTag]
		[h: sClasse = json.get(macro.return,"Classe")]
		[macro("core/cleanerAbilita@this"):json.append(source,sAbilita,sClasse)]
		[h: sNomeAb = getStrProp(oStats,"nome")]
		[macro("core/delAbilitaInUso@this"):sAbilitaTag]
	};{
		[bSuccess = 0]
	}]
}]

[h: macro.return = bSuccess]