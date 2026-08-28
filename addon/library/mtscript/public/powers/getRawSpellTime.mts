[h: source = arg(0)]
[h: spellName = arg(1)]
[h: bOpp = arg(2)]

[h: iTime = fetchSpellProp(spellName,"tempo")]
[h, if(isNumber(iTime)): return(0, iTime)]

[h: baseTime = listGet(iTime,0)]
[h: sTipoCosto = listGet(iTime,1)]
[h, switch(sTipoCosto), code:
case "arma":{
	[iArma = getArmaDaUsare(source)]
	[iTime = getAttackTime(source,bOpp,iArma,1)+baseTime]
};
default:{
	[assert(0,"Formato Tempo di Lancio Potere non riconosciuto")]
}]

[h: macro.return = iTime]