[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AmplificazioneCritica"]

[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("AmplificazioneCritica","cleanEffect"))]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[h: bTS = json.get(macro.return,"TSResult")]

[h, if(!bTS), code:{
	[eventInstaller(target,"On_Attacked",spellName,buildSpellMacroName("AmplificazioneCritica","attackedEvent"))]
	[eventInstaller(target,"On_Spellcasted",spellName,buildSpellMacroName("AmplificazioneCritica","spellcastedEvent"))]
}]



