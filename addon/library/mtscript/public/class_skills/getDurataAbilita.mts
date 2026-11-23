[h: source = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]
[h, if(argCount() > 2): bNumber = arg(2); bNumber = 0]

[h: iDurata = fetchClassSkillProp(sLibAbilita,"durata")]


[h, if(json.type(iDurata) == "OBJECT"), code:{
    [h: sCallback = json.get(iDurata, "callback")]
    [h: macroName = strformat("class_skills/%{sCallback}@this")]
    [h, macro(macroName): json.append(source, sLibAbilita, "Durata")]
    [iDurata = macro.return]
}]

[h, if(isNumber(iDurata)): return(0, iDurata)]

[h: sTipoMod = upper(string(iDurata))]

[h, switch(sTipoMod), code:
	case "TERMINE ROUND": {
		[if(bNumber): iDurata = 1]
	};
	default:{}
]


[h: macro.return = iDurata]
