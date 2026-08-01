[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: macroCalled = json.get(macro.args,"macroCalled")]

[h: switchToken(target)]

[h:sMsg = ""]

[h, if(remove == 1), code:{
	[setImmunita(target,"Veleno",0)]
	[setImmunita(target,"Sanguinamento",0)]
	[setImmunita(target,"Malattia",0)]
	[setImmunita(target,"Maledizione",0)]
	[return (0,"")]
}]

[if(!macroCalled), code:{
	[macro("powers/IncapacitatoMacro@this"): macro.args]
	[sMsg = macro.return]
	[setImmunita(target,"Veleno",1)]
	[setImmunita(target,"Sanguinamento",1)]
	[setImmunita(target,"Malattia",1)]
	[setImmunita(target,"Maledizione",1)]
}]

[h: macro.return = sMsg]