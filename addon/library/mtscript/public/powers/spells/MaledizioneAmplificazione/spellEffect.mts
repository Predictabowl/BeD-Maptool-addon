[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaledizioneAmplificazione"]

[h: temp = json.set("","tipo","macroCall","macroName","powers/spells/MaledizioneAmplificazione/removeEvent@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: bTS = json.get(macro.return,"TSResult")]

<!-- Installazione Evento -->
[h, if(!bTS), code:{
	[h: eventInstaller (target,"On_Effect_Received",spellName,"powers/spells/MaledizioneAmplificazione/eventMacro@lib:it.aldinucci.piero.bed.maptool.ruleset")]
	[h: eventInstaller (target,"On_Spellcasted",spellName,"powers/spells/MaledizioneAmplificazione/spellCastedMacro@lib:it.aldinucci.piero.bed.maptool.ruleset")]
}]

