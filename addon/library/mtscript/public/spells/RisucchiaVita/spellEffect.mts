[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "RisucchiaVita"]
[h: elemento = fetchSpellProp(spellName,"elemento")]


Bersaglio: [r: getName(target)]

[h: args = json.set("","source",source,"target",target)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]
	
[h: param = json.set("","target",target,"LL",iLL,"element",elemento)]
[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLP = macro.return]
[r, if(iLL > 0), code:{
	[macro("combat/checkDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target)]
	[h: difesa = macro.return]
	[h: param = json.set("","LP",iLP,"dmgLP","1d4","difesa",difesa,"elemento",elemento)]
	[h: param = json.set(param,"target",target,"source",source)]
	[macro("powers/getSpellDamage@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: danno = macro.return]

	[h: param = json.append("",target,danno)]
	[h: param = encode(param)]
	[h: param = "target="+source+"; baseMacro= core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset;  params ="+param]
	[macro("conditionalMacro@Lib:General"): param]
	[macro("core/CuraTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,danno)]
};{}]


