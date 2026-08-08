[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EsplosioneVirale"]
[h: sDanno = "1d4"]	
[h: sTipo = "Malattia"]

[h: lMaled = getListaEffPerTipo(target,sTipo)]
[h: lMaled2 = lMaled]
[h: iInd = 0]

[h, foreach(sMaled,lMaled2), code:{
	[sOrigine = getOrigineEffetto(getEffetto(target,sMaled))]
	[if(isHostile(sOrigine,source)): lMaled = json.remove(lMaled,iInd)]
	[iInd = iInd+1]
}]

[h: bFlag = 0]
[h, if(!json.isEmpty(lMaled)), code:{
	[if(json.length(lMaled)>1), code:{
		[bCheck = input(strformat("sMaled|%s|Malattia da detonare|RADIO|VALUE=STRING",json.toList(lMaled)))]
	};{
		[bCheck = 1]
		[sMaled = json.get(lMaled,0)]
	}]
	[if(bCheck), code:{
		[sDanno = "2d4"]
		[rimuoviEffetto(target,sMaled)]
	}]
}]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]

