[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]

[h: spellName = "PugnaleGelido"]

[h, if(getState("Congelamento", target)): sDanno = "2d4"; sDanno = "1d4"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]

