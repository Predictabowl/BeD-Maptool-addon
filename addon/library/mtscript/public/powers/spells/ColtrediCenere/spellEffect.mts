[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ColtrediCenere"]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"effetto","Cecita")]
[h: oEffetto = macro.return]
[h: oEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffectParam]

[jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1d4","stato","Incendio",
	"categoria","MAGIA","inizioRound",0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]