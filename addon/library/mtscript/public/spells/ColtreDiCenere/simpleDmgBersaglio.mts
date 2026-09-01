[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: spellName = json.get(macro.args,2)]

[macro("powers/isHittable@lib:it.aldinucci.piero.bed.maptool.ruleset"): macro.args]
[h: isHit = macro.return]
[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",source,"key","hittableResult")]
[h: msgOutput = macro.return]

[h, if(isHit), code:{
	[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno",2)]
	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,target)]
	[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",source,"key","strPotere")]
	[h:msgOutPut= msgOutput+ macro.return+"<br>"]
}]

[h: macro.return = msgOutput]
