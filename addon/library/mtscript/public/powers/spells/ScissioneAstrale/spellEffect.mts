[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ScissioneAstrale"]

[h, if(isEnergiaDistruttiva(source)): sDanno = "1d3"; sDanno = "1d2"]

[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellToken",spellName)]
[h, if(macro.return): pushStatModifier(source,"durataMod",-1)]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",sDanno,"stato","","categoria","MAGIA","bloccaTS",1)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]

