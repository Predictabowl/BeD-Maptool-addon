[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EmissioneLuminosa")]

[h: sEffetto = "Cecita"]
[h: iMolt = 1]

[h: bState = getState(sEffetto,target)]
[h, if(bState): sDanno = "1d10"; sDanno = "1d4"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]
[h: iLL = json.get(macro.return,"LL")]


[h, if(sDanno == "1d4"), code:{
	[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
	[h: oEffetto = macro.return]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"LL",iLL)] 
}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]