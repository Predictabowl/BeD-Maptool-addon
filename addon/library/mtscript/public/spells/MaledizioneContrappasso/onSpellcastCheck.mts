[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]
[h: spellName = json.get(eventParam,"spellName")]


[macro("powers/isHarmful@lib:it.aldinucci.piero.bed.maptool.ruleset"): spellName]
[h, if(!macro.return): return (0,"")]

[macro(buildSpellMacroName("MaledizioneContrappasso","macroEffect")): macro.args]