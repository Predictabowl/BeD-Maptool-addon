[h: oToken = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount() > 2): options = arg(2); options = "{}"]

[h, if(json.contains(options,"LL")), code:{
	[iLL = json.get(options,"LL")]
};{
	[macro("powers/getAutoLL@this"): json.append(oToken, spellName)]
	[iLL = macro.return]
}]

[h, if (json.contains(options,"critRes")), code:{
	[bCrit = json.get(options,"critRes")]
};{
	[macro("combat/getUltimoCritico@this"): oToken]
	[bCrit = macro.return]
}]

[h, if(bCrit == 1), code:{
	[iPcrit = getPCrit(oToken)]
	[iBonusCrit = roundRoll(iPcrit/15)]
};{
	[iBonusCrit = 0]
}]

[h: macro.return = iLL + iBonusCrit]