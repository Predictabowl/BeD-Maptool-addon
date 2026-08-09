[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Ustionare"]

[macro("core/retrieveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"stato","Incendio")]
[h , if(json.isEmpty(macro.return)): sDanno = "1d4"; sDanno = "1d6"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]

