[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"opportunita")]
[h: iCrit = json.get(macro.args,"crit")]

[h, if(isNumber(bOpp) == 0): bOpp = 0]


[h: bHit = 1]


[h, if(bHit == 1), code: {
	[macro("combat/coperturaRoll@this"): json.set("","target",target,"source",source)]
	[h: copertRoll = macro.return]
	[h, if(copertRoll == 1): bHit = 0]
	
}]

[h, if(bHit == 1), code:{
	[h: critRoll = rollCritico(source)]
	[h: bMancato = rollMancare(source,target)]
	[h, if(bMancato): bHit = 0]
}]


[h, if(bHit == 1), code:{
	[macro("combat/checkDifesa@this"): json.append(source,target,bOpp)]
	[h: difesa = upper(macro.return)]
	[h, if(difesa == "SCHIVATO"): bHit = 0]
}]

[h: macro.return = bHit]

