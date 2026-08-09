[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "Velocita"]

[macro("combat/getUltimoCritico@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: critRes = macro.return]
[h, if(source == target && critRes == -1): critRes = 0]
[h: args = json.set("","source",source,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]

[r, if(iLL > 0 && critRes >= 0), code:{
	[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName)]

	[h: spellDur = macro.return]
	[macro("powers/getParamVelocita@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","effetto",nomeDec,"durata",spellDur,"target",target)]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(macro.return,"verbose",0)]
	[h, if(target == source): PA = PA+2]
};{}]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
