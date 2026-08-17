[h: source = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[macro("class_skills/getAbilitaClasseTutte@this"): source]
[h, if(!json.contains(macro.return, sLibAbilita)): return(0,0)]

[h, macro("class_skills/getTipoAbilita@this"): sLibAbilita]
[h: sTipo = macro.return]
[h: bFlag = 1]

[h: iMaxSkill = 1]
[h: bSameSkill = 0]

[macro("class_skills/getAbilitaClasse@this"): json.append(source,"NessunaPieta")]
[h: noMercy = macro.return]

[macro("class_skills/getBloccoAbilita@this"):json.append(source,sLibAbilita)]
[h, if(macro.return != 0): bFlag = 0]

[r, switch(sTipo), code:
case "ATTIVA":{
	[h, if(json.isEmpty(noMercy) == 0): iMaxSkill = 2]
};
case "PECULIARE":{};
case "EROICA":{
		[if(!isEroicaAttivabile(source)): return(0,0)]
	};
default:{
	[assert(0,"Tipo abilita non conforme")]
}]

[h: switchToken(source)]

[macro("class_skills/getAbilitaInUso@this"): json.append(source,sTipo)]
[h: cAbilita = macro.return]

[h, if(listContains(cAbilita,sLibAbilita)): bFlag = 0]

[h: countS = listCount(cAbilita)]

[h, if(countS >= iMaxSkill): bFlag = 0]

[h: macro.return = bFlag]
