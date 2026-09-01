[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "BolideDiGhiaccio"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h, if(getState("Congelamento",target)): sDanno = "1d9"; sDanno = "1d7"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]