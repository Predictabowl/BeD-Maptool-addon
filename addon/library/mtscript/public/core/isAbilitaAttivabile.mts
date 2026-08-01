[h: source = json.get(macro.args,0)]
[h: sNome = json.get(macro.args,1)]

[macro("core/getStatsAbilita@this"):macro.args]
[h ,if(macro.return != ""), code:{
	[h: sTipo = getStrProp(macro.return,"tipo")]
	[h: bFlag = 1]
};{
	[h: bFlag = 0]
	[h: sTipo = ""]
}]


[h: sTipoId = "ABILITA"+sTipo]
[h: iMaxSkill = 1]
[h: bSameSkill = 0]

[macro("core/getAbilitaClasse@this"): json.append(source,"NessunaPieta")]
[h: noMercy = macro.return]
[macro("core/getAbilitaClasse@this"): json.append(source,"Pragmatismo")]
[h: oPragmatismo = macro.return]

[macro("core/getBloccoAbilita@this"):json.append(source,sNome)]
[h, if(macro.return != 0): bFlag = 0]

[r, switch(sTipo), code:
case "ATTIVA":{
	[h, if(json.isEmpty(noMercy) == 0): iMaxSkill = 2]
	[h, if(json.isEmpty(oPragmatismo) == 0): bSameSkill = 1]
};
case "PECULIARE":{};
default:{
	[assert(0,"Tipo abilita non conforme")]
}]

[h: switchToken(source)]


[h: cAbilita = getStrProp(Lista_Dati,sTipoId)]

[h, if(bSameSkill == 0 && listContains(cAbilita,sNome) == 1): bFlag = 0]

[h: countS = listCount(cAbilita)]

[h, if(countS >= iMaxSkill): bFlag = 0]

[h: macro.return = bFlag]

