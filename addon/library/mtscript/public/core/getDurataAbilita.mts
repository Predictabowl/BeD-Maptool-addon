[h: source = json.get(macro.args,0)]
[h: sNome = json.get(macro.args,1)]

<!-- Recupero le statistiche base -->
[macro("core/getStatsAbilita@this"): json.append(source,sNome)]
[iDurata = getStrProp(macro.return,"durata")]

[h,if(isNumber(iDurata)), code:{
	[macro("core/getAbilitaClasse@this"): json.append(source,sNome)]
	[ oAbilita = macro.return]
	[iDurataMod = json.get(oAbilita,"durataMod")]
	[if(!isNumber(iDurataMod)): iDurataMod = 0]
	[iDurata = iDurata+iDurataMod]
};{
	[iDurata = 1]
}]

[h: macro.return = iDurata]
