[h: healLL = json.get(macro.args,"healLL")]
[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]  <!-- Opzionale se manca il LL -->
[h: bCritRes = json.get(macro.args,"critRes")] <!-- Opzionale -->
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale se manca lo spellName -->
[h: iPCrit = json.get(macro.args,"potenzaCritico")] <!-- opzionale -->
[h: fPercMod = json.get(macro.args,"percMod")] <!-- opzionale -->

[h, if(!isNumber(bCritRes)): bCritRes = getUltimoCritico(source)]
[h, if(!isNumber(iPCrit)): iPCrit = getPCrit(source)]
[h, if(!isNumber(fPercMod)): fPercMod = getModHealPerc(source,target)]

[h, if(iLL == ""), code:{
	[macro("powers/getAutoLL@this"): json.append(source,spellName)]
	[iLL = macro.return]
}]

[h, if(json.contains(macro.args,"baseHeal") == 0), code:{
	[h: healBase = "0"]
};{
	[h: healBase = json.get(macro.args,"baseHeal")]
}]

[h: iLL = iLL + popStatModifier(source,"LLCura")]

[h: sRolledDice = ""]
[h: result = 0]
[h, for(i,0,iLL), code:{
	[fRolled = eval(string(healLL))]
	[sRolledDice = strformat("%{sRolledDice}%{fRolled}, ")]
	[result = result + fRolled]
}]
[appendMessaggio(target,"spellRolledDice",sRolledDice)]



[h: healBase = eval(string(healBase))]
[h: result = (result + healBase)]

[h, if(bCritRes == 1), code:{
	[result = result * (1+iPCrit/100)]
}]

[h: result = result*fPercMod]

[h: macro.return = roundRoll(result)]
