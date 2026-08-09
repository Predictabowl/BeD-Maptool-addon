[h: source = json.get(macro.args,"source")]
[h: id = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: spellName = "PalladiFuoco"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

[h: args = json.set("","source",source,"target",id)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: critRes = macro.return]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]
	
[h: param = json.set("","target",id,"LL",iLL,"element",elemento)]
[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLP = macro.return]
[h, if(iLL > 0 && critRes>=0), code:{
	[h: param = json.set("","LP",iLP,"dmgLP","1d6","elemento",elemento,"target",id,"source",source)]
	[macro("powers/getSpellDamage@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: danno = macro.return]

	[h: param = json.set("","target",id,"valore",danno,"verbose",0)]
	[macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	
	[h: param = json.set("","target",id,"source",source,"spellToken",spellName,"critRes",critRes)]
	[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	
	[h: param = json.set("","target",id,"LP",iLP,"TSRes",macro.return,"effetto","Incendio","spellName",fetchSpellProp(spellName,"nome_decorativo"))]
	[macro("powers/ifTSEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]

	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,id)]
}]

