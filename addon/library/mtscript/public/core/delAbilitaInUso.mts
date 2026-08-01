[h: source = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]

[macro("core/getStatsAbilita@this"):macro.args]
[h, if(macro.return != ""), code:{
	[h: sTipo = upper(getStrProp(macro.return,"tipo"))]
	[h: sTipoId = "ABILITA"+sTipo]
	[macro("core/getAbilitaInUso@this"): json.append(source,sTipo)]
	[h: lAbilita = macro.return)]
	[h: index = listFind(lAbilita,sAbilita)]
	[h, if(index != -1), code:{
		[lAbilita =listDelete(lAbilita,index)]
		[h: switchToken(source)]
		[h: Lista_Dati = setStrProp(Lista_Dati,sTipoId,lAbilita)]
	}]
}]