[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ProsciugareVitalita"]


[h, if(isEnergiaDistruttiva(source) > 0): pushStatModifier(source, "durataMod", 1)]

[h: sEffetto = "Spossatezza"]
[h: iMolt = 1]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[h: bTS = json.get(macro.return, "TSResult")]
[h, if(!bTS), code:{
	[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1", "inizioRound", 0, "bloccaTS", 1)]
}]


