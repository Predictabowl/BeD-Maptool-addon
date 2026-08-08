[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
	[h: spellName = json.get(macro.args,"spellName")]
};{
	[h: source = arg(0)]
	[h: spellName = arg(1)]
	[target = ""]
}]

[macro("powers/getSpellOrigine@this"): json.append(source,spellName)]
[h: sOrigine = macro.return]

[h, if(target == ""): target = getSelected()]

[h: targetType = upper(fetchSpellProp(spellName,"tipo_bersaglio"))]
[h, if(targetType == ""): targetType = "TUTTI"]

[h: iSpellRange = getSpellRange(source,spellName)]
[h: iSpellAOE = getSpellAoE(source,spellName)]

[h: flag  = 1]
[h, if(iSpellRange == 0 && iSpellAOE ==0): target = source]

[h: sTipo = upper(fetchSpellProp(spellName,"tipo"))]
[h, if(sTipo == "SERVITORE"): target = source]

[h, if(iSpellRange != 0 && iSpellAOE ==0),code :{
	[target = listGet(getSelected(),0)]
	[macro("powers/isTargetLegal@this"):target]
	[assert(macro.return == 1, "Bersaglio selezionato non valido")]
}]

[h, if(iSpellAOE != 0), code:{
	[macro("powers/getBersaglioAOE@this"):json.append(source,spellName)]
	[h: target = macro.return]
}]

[h: macro.return = target]