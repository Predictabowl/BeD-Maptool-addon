[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SpinaNarcotica"]
[h: sNomeEffAux = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto","Torpore","moltiplicatore",1,"nome",sNomeEffAux)]
[h: oEffetto = json.set(macro.return,"tipo","NASCOSTO")]

[h: oSpellEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]
[h: iLL = json.get(macro.return,"LL")]
[h: bTS = json.get(macro.return,"TSResult")]

[h, if(!bTS), code:{
	[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato","Veleno","categoria","VELENO","bloccaTS",1,"effettoAux",sNomeEffAux,"inizioRound",0)]
	[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
}]