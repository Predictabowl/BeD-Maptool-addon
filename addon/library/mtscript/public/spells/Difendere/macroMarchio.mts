[h: difensore = json.get(macro.args,"difensore")]
[h: target = json.get(macro.args,"attaccante")]
[h: source = json.get(macro.args,"proprietario")]

[h: spellName = "Difendere"]

[h: aTargets = getDaMemoriaRound(difensore, spellName)]
[h: aTargets = json.unique(json.append(aTargets, target))]
[h: setInMemoriaRound(difensore, spellName, aTargets)]
[h: return(0,"")]