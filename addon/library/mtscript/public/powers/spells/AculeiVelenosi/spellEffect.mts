[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AculeiVelenosi"]

[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1d2","inizioRound",1)]