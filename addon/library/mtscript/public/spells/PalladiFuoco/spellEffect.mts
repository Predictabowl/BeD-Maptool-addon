[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "PalladiFuoco"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d6")]
[h: iLP = json.get(macro.return,"LP")]
[h: iLL = json.get(macro.return,"LL")]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",1,"stato","Incendio","categoria","MAGIA","LP",iLP,"LL",iLL,"inizioRound",0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]