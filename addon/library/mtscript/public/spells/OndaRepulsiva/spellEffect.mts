[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: spellName = "OndaRepulsiva"]

[h: sEffetto = "Atterrato"]
[h: iMolt = 1]

[h: param = json.set("","target",target,"effetto",sEffetto,"moltiplicatore",iMolt)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = macro.return]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto,"durata",-1)]
[h: bTS = json.get(macro.return,"TSResult")]

[h, if(bTS == 0), code:{
	[oServitore = getServitore(source)]
	[moveTokenFromSource(oServitore,target,1)]
}]
