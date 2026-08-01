[h, if(argCount() > 1), code:{
	[source = arg(0)]
	[libName = arg(1)]
	[if(argCount()>2): target = arg(2); target = ""]

};{
	[macro.args = arg(0)]
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
	[h: libName = json.get(macro.args,"spellName")]
}]

[h: iDurata = getLibProperty("durata",libName)]
[h: sScuola = upper(getScuola(source,libName))]
[h, if(sScuola == "RUNA"): bFlag = 0; bFlag = 1]

[h, if(iDurata != -1 && bFlag == 1), code:{

	[macro("powers/getSpellMod@this"): json.append(source,libName,"durata")]
	[h: iMod = json.get(macro.return,"mod")]
	[h: dPerc = 1+json.get(macro.return,"perc")]

	[h: iMod = iMod + getStatModifier(source,"durataMod")]

	[h: iDurata =roundRoll((iDurata+iMod)*dPerc)]
	[h, if(iDurata <0): iDurata = 0]
}]

[h: macro.return = iDurata]