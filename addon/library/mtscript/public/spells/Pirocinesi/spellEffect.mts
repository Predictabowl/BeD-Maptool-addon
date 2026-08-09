[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Pirocinesi"]


[h: sStato = "Incendio"]
[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d3")]
[h: iLP = json.get(macro.return, "LP")]
[h: iLL = json.get(macro.return, "LL")]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato", sStato, "categoria", sStato,"LL", iLL, "LP", iLP,"inizioRound",0)]
