[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oOrigine = json.get(macro.args,"origine")]

[h: spellName = "ArtigliVelenosi"]



[macro("combat/getUltimaDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: sDifesa = macro.return]

[h, if(sDifesa != "parato"), code:{
	[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato","Veleno","categoria","VELENO","inizioRound",0)]
	[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
}]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target)]