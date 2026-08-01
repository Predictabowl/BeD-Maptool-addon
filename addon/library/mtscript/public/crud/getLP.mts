[h: sElement = ""]
[h: jArg = arg(0)]
[h, if(json.type(jArg) == "OBJECT"), code:{
	[source = json.get(jArg,"source")]
	[target = json.get(jArg,"target")]
	[iLL = json.get(jArg,"LL")]
	[spellName = json.get(jArg,"spellName")]
	[sElement =  json.get(jArg,"element")]
};{
	[source = arg(0)]
	[target = arg(1)]
	[iLL = arg(2)]
	[spellName = arg(3)]
}]

[h: iRes = getResistance(json.set("","source",source,"target",target,"spellName",spellName, "elemento", sElement))]
[h: assert(isNumber(iRes),"Resistenza Elemento inconsistente")]
[h: iResult  = iLL - iRes]
[h, if(iResult <0): iResult = 0]

[h: macro.return = iResult]
