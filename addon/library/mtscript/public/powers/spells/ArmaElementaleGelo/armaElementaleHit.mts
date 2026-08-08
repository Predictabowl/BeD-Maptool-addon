[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam =  json.get(macro.args,"eventParam")]

[h: iLL = json.get(macro.args,"LL")]
[h: iNumHits = json.get(macro.args,"numHits")]
[h: sDanno = json.get(macro.args,"damage")]
[h: spellName = json.get(macro.args,"spellName")]

[h: msgOut = ""]
[h:sTipo = json.get(eventParam,"tipo")]
[h, if(sTipo == "ATTACCO"), code:{
	[sFluffName = fetchSpellProp(spellName,"nome_decorativo")]
	[iNumHits = iNumHits-1]
	[h: param = json.set("","source",source,"target",target,"LL",iLL,"spellName",spellName)]
	[h: iLP = getLP(param)]

	[h: param = json.set("","LP",iLP,"dmgLP",sDanno,"spellName",spellName,"target",target,"source",source)]
	[macro("powers/getSpellDamage@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: iDanno = macro.return]

	[h: msgOut= strformat("%{sFluffName}")]

	[h: param = json.set("","target",target,"source",source,"valore",iDanno,"verbose",0)]
	[dannoTarget(param)]
	[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",target,"key","strDanno")]
	[msgOut = strformat("%{msgOut}: %s",macro.return)]

	[if(iNumHits>0), code:{
		[macro("events/setParamInEvent@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,"On_Hit","Incantesimo Arma Elementale","numHits",iNumHits)]
		[msgOut = strformat("%{msgOut} (cariche: %d)",iNumHits)]
	};{
		[rimuoviEffetto(source,sFluffName)]
		[msgOut = strformat("%{msgOut}. %s",macro.return)]
	}]
	
}]



[h: macro.return = msgOut]
