[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "GloboCongelante"]


[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"effetto","Congelamento")]
[h: oEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",macro.return)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffectParam]
[h: iLL = json.get(macro.return,"LL")]
[h: bTS = json.get(macro.return,"TSResult")]

[h, if(!bTS): sDanno="1d10"; sDanno="1d4"]
[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno", sDanno,"LL",iLL)]