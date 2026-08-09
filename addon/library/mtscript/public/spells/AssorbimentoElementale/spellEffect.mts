[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AssorbimentoElementale"]

[h: iCuraLL = "1d5"]
[macro("powers/curaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL",iCuraLL,"spellName",spellName)]