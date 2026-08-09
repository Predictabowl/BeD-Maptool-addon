[h: source = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: idAura = fetchSpellProp("SorgenteCurativa","nome_decorativo")]

[h: oAura = json.get(Aure_Attive,idAura)]
[h: oAura = json.set(oAura,"BersagliColpiti","")]

[h: iRound = 0]
[h, if(json.contains(oAura,"round")), code:{
	[h: iRound = json.get(oAura,"round")+1]
	[if(iRound > 3): iRound = 3]
	[oAura = json.set(oAura,"round",iRound)]
};{
	[oAura = json.set(oAura,"round",1)]
	[iRound = 1]
}]

[h: Aure_Attive = json.set(Aure_Attive,idAura,oAura)]
[h, if(iRound > 1) ,code:{
	[macro("powers/updateSingleAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,idAura)]
}]