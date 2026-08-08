[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ColpoAla"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

[r, foreach(id, target, "<br>,"), CODE:{

	Bersaglio: [r: getName(id)]

	[h: args = json.set("","source",source,"target",id)]
	[h: args = json.set(args,"spellName",spellName)]
	[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
	[h: critRes = macro.return]
	[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
	[h: iLL = macro.return]
	

	[h: param = json.set("","target",id,"LL",iLL,"element",elemento)]
	[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	[h: iLP = macro.return]
	[r, if(iLL > 0), code:{

		[h: param = json.set("","target",id,"source",source,"spellToken",spellName,"critRes",critRes)]
		[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
		[h: param = json.set("","target",id,"LP",iLP,"TSRes",macro.return,"effect","Atterrato","spellName","Atterrato")]
		[macro("powers/ifTSEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]

	};{}]

	<br>
}]

