[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]
[h: spellName = json.get(eventParam,"spellName")]


[h, if(spellName!="") : return(0, "")]
[macro("spells/MaledizioneContrappasso/macroEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): macro.args]