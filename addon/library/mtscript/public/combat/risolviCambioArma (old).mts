[h: source = json.get(macro.args,"source")]
[h: sArma1= json.get(macro.args,"nomeArmaPrimaria")]
[h: sArma2= json.get(macro.args,"nomeArmaSecondaria")]
[h: sScudo = json.get(macro.args,"nomeScudo")]
[h, if(json.contains(macro.args,"armaLancio")): bLancio = json.get(macro.args,"armaLancio"); bLancio = 0]
[h: iCostoPA = json.get(macro.args,"costoPA")]


[h, if(!isCombat()): iCostoPA = 0]

[h: switchToken(source)]
[h, if(!isNumber(iCostoPA)), code:{
	[if(bLancio): iCostoPA = 0; iCostoPA = 3]
}]

[h: oCost = json.append(source,iCostoPA,0,0,0)]
[macro("core/payAction@this"): oCost]

[r, if(macro.return ==1), code:{
	[if(sArma1 !=""), code:{
		[macro("equipaggiaArma@Lib:TokenMacros"): json.append(source,1,sArma1)]
	}]
	[if(sArma2 !=""), code:{
		[macro("equipaggiaArma@Lib:TokenMacros"): json.append(source,2,sArma2)]
	}]
	[if(sScudo !=""), code:{
		[macro("equipaggiaScudo@Lib:TokenMacros"): json.append(source,sScudo)]
	}]
	[h: bInterrupt = 0]
};{
	[h: bInterrupt = 1]
}]


[macro("core/clearStatModifiers@this"): source]
[macro("applyIngombroPenalties@Lib:TokenMacros"): source]

[h: macro.return = bInterrupt]