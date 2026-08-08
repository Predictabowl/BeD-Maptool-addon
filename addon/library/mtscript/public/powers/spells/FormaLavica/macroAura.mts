[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h: sCaster = json.get(oParam,"caster")]
[h: idAura = json.get(oParam,"idAura")]
[h: bCritRes = json.get(oParam,"critRes")]

[h: sMsg = ""]
[h, if(remove == 1 || target == sCaster): return(0,"")]

[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sCaster,target,idAura)]
[if(!macro.return), code:{
	[spellName = "FormaLavica"]
	[sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[iLL = json.get(oParam,"LL")]
	[iLP = getLP(sCaster,target,iLL,spellName)]

	[sDanno = "1d2"]
	[param = json.set("","LP",iLP,"dmgLP",sDanno,"spellName",spellName,"target",target,"source",sCaster,"critico",bCritRes)]
	[macro("powers/getSpellDamage@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[iDanno = macro.return]
	[sRolledDice = popMessaggio(target,"spellRolledDice")]

	[dannoTarget(json.set("","target",target,"source",sCaster,"valore",iDanno,"verbose",0,"origine",""))]

	[h: sTooltip = strformat("Danno(%{sDanno}x%{iLP}) = %{sRolledDice}")]
	[h: sMsg= strformat("<img src='%s' width='25' height='25'/> <span title='%{sTooltip}'>%s</span>. %s",
		getImage(spellName),fetchSpellProp(spellName,"nome_decorativo"),popMessaggio(target,"strDanno"))]
	
	[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(sCaster,target,idAura)]
}]

[h: macro.return = sMsg]