[h: source = arg(0)]
[h: target = arg(1)]
[h: spellName = arg(2)]

[h: sElemento = upper(getLibProperty("elemento",spellName))]
[h, if(listCount(sElemento) < 2): return(0, sElemento)]

[h: sLowest = listGet(sElemento, 0)]
[h, if(target == ""): return(0, sLowest)]

[h: iLowest = 100]
[h, foreach(sCurrent, sElemento), code:{
	[oParam = json.set("", "source", source, "target", target,"spellName", spellName, "elemento", sCurrent)]
	[iValue = getResistance(oParam)]
	[if(iValue < iLowest), code:{
		[sLowest = sCurrent]
		[iLowest = iValue]
	}]
}]

[h: macro.return = sLowest]