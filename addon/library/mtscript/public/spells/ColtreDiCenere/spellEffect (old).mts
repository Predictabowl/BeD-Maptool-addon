[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ColtreDiCenere")]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: nomeEffetto = strformat("%s (%s)",nomeDec,getName(source))]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d4")]
