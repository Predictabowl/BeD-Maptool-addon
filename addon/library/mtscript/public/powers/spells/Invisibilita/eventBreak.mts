[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iCD = json.get(macro.args,"CD")]

[h: spellName = "Invisibilita"]
[h: sEffect = fetchSpellProp(spellName,"nome_decorativo")]

[h: param = json.set("","target",target,"source",source,"spellToken",spellName,"CD",iCD)]
[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[TSResult = macro.return]

[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",target,"key","TSResult")]
[h: msg = "<br>"+macro.return]

[h, if(TSResult == 1), code:{
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sEffect)]
	[h: msg = msg +"<br>"+ macro.return]
}]

[h: macro.return = msg]
