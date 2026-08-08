[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FulmineDirompente")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d10")]
[h: iLP = json.get(macro.return,"LP")]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]

[macro("powers/applySovraccarico@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"LP",iLP)]




