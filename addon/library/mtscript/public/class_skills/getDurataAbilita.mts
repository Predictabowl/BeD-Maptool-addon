[h: source = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]
[h, if(argCount() > 2): bNumber = arg(2); bNumber = 0]

[h: iDurata = fetchClassSkillProp(sLibAbilita,"durata")]

[h, if(isNumber(iDurata)): return(0, iDurata)]

[h, if(json.type(iDurata) == "ARRAY"), code:{
	[h: sMacro = json.get(iDurata,0)]
	[macro("class_skills/macros/" + sMacro +"@this"): json.append(source, sLibAbilita, "durata")]
	[return(0, macro.return)]
}]

[h, if(listCount(iDurata) < 2): sTipoMod = upper(string(iDurata)); sTipoMod = upper(listGet(iDurata,2))]

[h, switch(sTipoMod), code:
	case "LIV": {
		[iLiv = getLivelloAbilita(source, sLibAbilita)]
		[iDurata = listGet(iDurata, 0) + listGet(iDurata, 1)*iLiv]
	};
	case "TERMINE ROUND": {
		[if(bNumber): iDurata = 1]
	};
	default:{}
]


[h: macro.return = iDurata]
