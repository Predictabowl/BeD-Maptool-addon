[h: source = arg(0)]
[h: spellName = arg(1)]
[h: bOpp = arg(2)]

[h: time = fetchSpellProp(spellName,"tempo")]
[h, if(time == 0): return (0,0)]

[h, if(!isNumber(time)), code:{
	[h: baseTime = listGet(time,0)]
	[h: sTipoCosto = listGet(time,1)]
	[switch(sTipoCosto), code:
	case "arma":{
		[iArma = getArmaDaUsare(source)]
		[time = getAttackTime(source,bOpp,iArma,1)+baseTime]
	};
	default:{
		[assert(0,"Formato Tempo di Lancio Potere non riconosciuto")]
	}]
}]

[h: macro.return = time]