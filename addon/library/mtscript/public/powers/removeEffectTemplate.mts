[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sTipo = json.get(macro.args,"tipo")]
[h: spellName = json.get(macro.args, "spellName")]
[h: iPRMod = json.get(macro.args,"PR")]
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->

<!-- Macro Sperimentale -->

[h: switchToken(source)]
[h, if(isNumber(iLL)): jOptions = json.set("", "LL", "iLL"); jOptions = "{}"]

[h: iPR = getSpellPRMod(source, spellName, jOptions)+ iPRMod]
[h: msgOut = ""]
[macro("core/retrieveEffect@this"): json.append(target,"tipo",sTipo)]
[h: lEffects = macro.return]
[h: iNumEff = json.length(lEffects)]
[h, if(iNumEff>0): bFlag = 1; bFlag = 0]

[h, if(bFlag), code:{
	[iRoll = roll(1,iNumEff)-1]
	[sEffect = json.get(lEffects,iRoll)]

	[oEffect = getEffetto(target, sEffect)]
	[iRR = getRREffetto(target, oEffect)]
	[macro("RollRimuoviEffetto@Lib:Meccaniche"): 0]
	[h: iResult = macro.return]
	[h: bResult = iResult+iPR >= iRR]
	[h: msgOut= strformat("<div>Potenza di Rimozione: <span title='1d20 = %d'>%d</span>; CD: %d</div>", iResult, iResult+iPR, iRR)]
	[h, if(bResult), code:{
		[rimuoviEffetto(target,sEffect)]
		[msgOut= strformat("%{msgOut}<br>%{sEffect} rimosso da %s",getName(target))]
	};{
		[msgOut= strformat("%{msgOut}%. Rimozione Fallita",getName(target))]
	}]
}]


[h: appendMessaggio(source,"strPotere",msgOut)]
