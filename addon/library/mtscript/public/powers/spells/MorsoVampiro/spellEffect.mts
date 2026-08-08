[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MorsoVampiro"]
[h: elemento = fetchSpellProp(spellName,"elemento")]


Bersaglio: [r: getName(target)]

[h: args = json.set("","source",source,"target",target)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: critRes = macro.return]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]
	

[h: param = json.set("","target",target,"LL",iLL,"spellName",spellName)]
[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLP = macro.return]

[r, if(iLL > 0), code:{
	[h: difesa = 0]
	[h: param = json.set("","LP",iLP,"dmgLP","1d6","difesa",difesa,"elemento",elemento)]
	[h: param = json.set(param,"target",target,"source",source)]
	[macro("powers/getSpellDamage@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: danno = macro.return]
	[h: cura = danno]

	[h: param = json.set("","target",target,"source",source,"valore",danno,"verbose",0)]
	[macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

	[h: param = json.set("","target",source,"valore",cura,"verbose",0)]
	[macro("core/CuraTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
};{}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
