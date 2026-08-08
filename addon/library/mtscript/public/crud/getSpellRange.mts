[h, if(argCount()>1), code:{
	[h: source = arg(0)]
	[h: spellName = arg(1)]
};{
	[h: macro.args = arg(0)]
	[h, if(json.type(macro.args) == "OBJECT"), code:{
		[h: source = json.get(macro.args,"source")]
		[h: target = json.get(macro.args,"target")]
		[h: spellName = json.get(macro.args,"spellName")]
	};{
		[h: source = json.get(macro.args,0)]
		[h: spellName = json.get(macro.args,1)]
	}]
}]


[h: iRange = fetchSpellProp(spellName,"raggio")]

[h, if(!isNumber(iRange)), code:{
	[iRange = upper(iRange)]
	[switch(iRange), code:
	case "PORTATA":{
		[iRange = getPortataArma(source)]
	};]
};{
	[macro("powers/getSpellMod@this"): json.append(source,spellName,"spellRange")]
	[h: iMod = json.get(macro.return,"mod")]
	[h: dPerc = json.get(macro.return,"perc")]
	[h: dPerc = calcPercentMod(dPerc)]
	[h: iRange = round((iRange+iMod)*dPerc)]
}]

[h, if(iRange > 0 && source != ""), code:{
	[bTouch = getOverride(source,"spellRangeTouch")]
	[if (bTouch): iRange = 1]
}]

[h: macro.return = iRange]