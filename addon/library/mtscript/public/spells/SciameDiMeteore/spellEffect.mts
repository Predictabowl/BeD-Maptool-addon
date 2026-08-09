[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SciameDiMeteore"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","2d6")]
[h: iLP = json.get(macro.return,"LP")]
[h: iLL = json.get(macro.return,"LL")]