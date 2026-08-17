[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EsplosioneDiFuoco")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d8")]

[h: sEffetto = "Atterrato"]
[h: iMolt = 1]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: bTS = json.get(macro.return,"TSResult")]

[h, if(bTS == 0), code:{
	[h: iPortata = 6+getDistance(target,0,source)]
	[macro("powers/getBersaglio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"portata",iPortata)]
	[h: oBersaglio = macro.return]
	[h: iX = getTokenX(0,oBersaglio)]
	[h: iY = getTokenY(0,oBersaglio)]
	[h: moveToken(iX,iY,0,target)]
}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]