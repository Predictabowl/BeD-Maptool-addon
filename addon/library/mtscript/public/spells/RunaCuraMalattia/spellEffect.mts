[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

<!-- Macro Sperimentale -->

[h: switchToken(source)]
[h: spellName = "RunaCuraMalattia"]


[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName,"critRes",0)]
[h: iLL = macro.return]

[macro("mechanics/RollRimuoviEffetto@lib:it.aldinucci.piero.bed.maptool.ruleset"):0]
[h: iResult = iLL+macro.return]
[h: msgOut= strformat("<br>Potenza di Rimozione: %{iResult}")]

[macro("core/retrieveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"categoria","Malattia")]
[h: lEffects = json.toList(macro.return)]
[h, if(listCount(lEffects)>0): bFlag = 1; bFlag = 0]

[h, if(bFlag), code:{
	[h: bCheck = input(strformat("sEffect|%{lEffects}|Malattia da rimuovere|RADIO|value = string"))]
	[h, if(bCheck == 0): bFlag = 0]
}]

[h, if(bFlag), code:{
	[macro("core/getEffectPower@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,sEffect)]
	[h: iEPow = macro.return]
	[h, if(iResult >= iEPow), code:{
		[rimuoviEffetto(target,sEffect)]
		[msgOut= strformat("%{msgOut}<br>%{sEffect} rimosso da %s",getName(target))]
	};{
		[msgOut= strformat("%{msgOut}%. Rimozione Fallita",getName(target))]
	}]
}]


[macro("utility/appendMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"key","strPotere","msg",msgOut)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
