[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: iResult = 0]

[h, if(source != ""), code:{
	[macro("core/popStatModifier@this"): json.append(source,"ModMoltiplicatoreStatoOut")]
	[iResult = iResult + macro.return]
}]


[h: macro.return = iResult]