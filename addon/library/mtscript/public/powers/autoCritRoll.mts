[h: jArgs = arg(0)]
[h, if(json.type(jArgs) == "OBJECT"), code:{
	[h: source = json.get(jArgs,"source")]
	[h: spell = json.get(jArgs,"spellName")]
	[h: bForceReroll = json.get(jArgs, "forceReroll")]
};{
	[source = arg(0)]
	[spell = arg(1)]
	[bForceReroll = 0]	
}]

[h: bItem = isItemInCast(source,spell)]
[h, if(bItem), code:{
	[macro("combat/setUltimoCritico@this"): json.append(source,0)]
	[return(0,0)]
}]

[h: critRes = getUltimoCritico(source)]
[h, if(bForceReroll != 1 && isNumber(critRes)): return(0,critRes)]

[h: lSpellTags = getLibProperty("tags",spell)]
[h: fCrit = getCritProb(getCrit(source))]

[h: bNoCrit1 = listContains(lSpellTags,"NOCRITICO")]
[h, if(bNoCrit1), code:{
	[fCrit = -100]
	[pushOverride(source,"forzaNoCritico")]
}]

[h: bNoCrit2 = popOverride(source,"noCrit")]
[h, if(bNoCrit2), code:{
	[broadcast(strformat("DEPRECATA: la spell %{spell} usa l'override (noCrit). Dovrebbe usare (forzaNoCritico)"))]
	[fCrit = -100]
	[pushOverride(source,"forzaNoCritico")]
}]

[h: critRes = rollCritico(source,fCrit)]
[h: macro.return = critRes]