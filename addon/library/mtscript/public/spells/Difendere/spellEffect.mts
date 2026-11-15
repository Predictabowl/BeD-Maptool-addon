[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellId = json.get(macro.args, "spellId")]

[macro("mechanics/addMarchioTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,"")]

[h: eventInstaller(target, "On_Attacked", spellId, buildSpellMacroName("Difendere","eventMarchio"))]

[h: return(0,"")]
