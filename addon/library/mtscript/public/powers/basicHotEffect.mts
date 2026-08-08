[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParams = json.get(macro.args,"parametri")]


[h: sMsg = ""]

[h, if(bRemove == 1), code:{
	[sEffettoAux = json.get(oParams,"effettoAux")]
	[rimuoviEffetto(target,sEffettoAux)]
	[return(0,sMsg)]
}]

[h: sDanno = string(json.get(oParams,"danno"))]
[h: iLL = json.get(oParams,"LL")]
[h: iLP = json.get(oParams,"LP")]
[h: spellId = json.get(oParams,"spellLib")]
[h: oOrigine = json.get(oParams,"lanciatore")]
[h: fPercMod = json.get(oParams,"percMod")] <!-- Opzionale -->
[h: bCrit = json.get(oParams,"critRes")] <!-- Opzionale -->
[h: fPCrit = json.get(oParams,"potenzaCritico")] <!-- Opzionale -->
[h: fPercMod = json.get(oParams,"percMod")] <!-- Opzionale -->
[h: lBlockStatus = json.get(oParams,"blockingStatuses")] <!-- Opzionale -->

[h, foreach(sStatus, lBlockStatus), code:{	
	[if(getState(sStatus, target)): return(0, strformat("<img src='%s' width='25' height='25'/> %s. Lo stato %{sStatus} previene l'effetto di rigenerazione su %s.",
			fetchSpellImage(spellId), fetchSpellProp(spellId,"nome_decorativo"), getName(target)))]
}]

[h: oOrigine = findToken(oOrigine)]

[h, if(!isNumber(bCrit)): bCrit = 0]

[h: param = json.set("","LL",iLL,"healLL",sDanno,"spellName",spellId,"target",target,"source",oOrigine,"critRes",bCrit,"potenzaCritico",fPCrit,"percMod",fPercMod)]
[macro("powers/executeSpellHeal@this"): param]

[h, if(macro.return > 0), code:{
	[h: sRolledDice = popMessaggio(target,"spellRolledDice")]
	[h: sTooltip = strformat("Cura(%{sDanno}) = %{sRolledDice}")]
	[h: sMsg= strformat("<img src='%s' width='25' height='25'/> <span title='%{sTooltip}'>%s</span>. %s",fetchSpellImage(spellId),
		fetchSpellProp(spellId,"nome_decorativo"),popMessaggio(target,"strCura"))]
}]


[h: macro.return = sMsg]

