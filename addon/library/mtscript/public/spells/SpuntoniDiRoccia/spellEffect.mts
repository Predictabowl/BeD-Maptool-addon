[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SpuntoniDiRoccia"]
[h: sStato = "Sanguinamento"]

[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato",sStato,"categoria",sStato,"inizioRound",0)]
[h: iLL = json.get(macro.return, "LL")]


[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d4", "LL", iLL)]