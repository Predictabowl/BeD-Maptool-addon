[h, if(argCount()>1), code:{
	[source = arg(0)]
	[spellName = arg(1)]
	[if(argCount()>2): bOpp = arg(2); bOpp = 0]
};{
	[h: macro.args = arg(0)]
	[h: source = json.get(macro.args,"source")]
	[h: spellName = json.get(macro.args,"spellName")]
	[h: bOpp = json.get(macro.args,"opportunita")]
	[if(!isNumber(bOpp)): bOpp = 0]
}]

[macro("powers/getRawSpellTime@this"): json.append(source, spellName, bOpp)]
[h: time = macro.return]

[h, if(time != 0) , code:{
	[if(time <1): time = 1]
}]

[h, macro("powers/getSpellMod@this"): json.append(source,spellName,"tempo")]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = -json.get(macro.return,"perc")*100]

[h, macro("powers/getSpellMod@this"): json.append(source,spellName,"VA")]
[h: dPerc = dPerc + json.get(macro.return,"mod")]

[h: time = time+iMod]
[h: time = calcActionTime(time,source,dPerc)]


[h: macro.return = time]