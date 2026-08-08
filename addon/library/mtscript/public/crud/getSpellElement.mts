[h, if(argCount()>1), code:{
	[source = arg(0)]
	[spellName = arg(1)]
	[if(argCount() > 2): target = arg(2); target = ""]
};{
	[macro.args = arg(0)]
	[h, if(json.type(macro.args) == "OBJECT"), code:{
		[source = json.get(macro.args,"source")]
		[spellName = json.get(macro.args,"spellName")]
		[target = json.get(macro.args,"target")]
	};{
		[source = json.get(macro.args,0)]
		[spellName = json.get(macro.args,1)]
		[target = ""]
	}]
}]

[h, macro("powers/getSpellLowestResistance@this"): json.append(source, target, spellName)]
[h: sElemento = macro.return]


[h,switch(sElemento),code:
case "UNIVERSALE": {
	[macro("crud/getElementoUniversale@this"): source]
	[sElemento = macro.return]
};

case "SERVITORE":{
	[macro("core/getEffettoServitore@this"): source]
	[sEff = macro.return]
	[assert(sEff != "","Servitore non presente")]
	[macro("core/getEffect@this"): json.append(source,sEff)]
	[oEff = macro.return]
	[if(json.isEmpty(oEff)), code:{
		[sElemento = "FISICO"]
	};{
		[oOtherInfo = json.get(oEff,"otherInfo")]
		[servitoreSpell = json.get(oOtherInfo,"spellName")]
		[sElemento = upper(fetchSpellProp(servitoreSpell,"elemento"))]
	}]
};

case "MACRO":{
	[macro("getElemento@"+spellName): source]
	[sElemento = macro.return]
};

case "EDS":{
	[macro("crud/getSpiritoAttivo@this"):source]
	[sSpirito = macro.return]
	[macro("powers/getElementiSpirito@this"):json.append(source,sSpirito)]
	[listEle = json.toList(macro.return)]
	[bCheck = input(strformat("sElemento|%{listEle}|Scegli l'elemento|RADIO|value=String"))]
	[assert(bCheck,"Operazione Interrotta")]
};
default:{
}]
[h: macro.return = sElemento]