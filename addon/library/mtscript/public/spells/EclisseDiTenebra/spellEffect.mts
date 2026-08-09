[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EclisseDiTenebra"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d4")]
[h: iLP = json.get(macro.return,"LP")]
[h: iLL = json.get(macro.return,"LL")]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",1,"stato","","categoria","MAGIA","LP",iLP,"LL",iLL,"inizioRound",0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]