[h: source =macro.args]
[macro("powers/getSpellInCast@this"):source]
[h, if(macro.return != ""), code:{
	[macro("powers/getSpellTarget@this"): json.set("","source",source,"spellName",macro.return)]
	[targets = macro.return]
	[if(listCount(targets) > 0), code:{
		[h:selectTokens(targets, 0,",")]
		[return (0, targets)]
	}]
}]