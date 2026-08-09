[h: source = json.get(macro.args,"source")]
[h: targets = json.get(macro.args,"target")]

[h: spellName = "SpazzataCoda"]
[h: elemento = fetchSpellProp(spellName,"elemento")]


[r, foreach(target, targets, "<br>,"), CODE:{


	Bersaglio: [r: getName(target)]

	[macro("combat/checkDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target)]
	[h: difesa = macro.return]

	[h: PA_save =getProperty("PA_Attacco",source)]
	[h: danno_save = getProperty("Danno_arma1",source)]
	[h: molt_save = getProperty("Moltiplicatore_Att",source)]
	[h: setProperty("PA_Attacco",0,source)]
	[h: setProperty("Moltiplicatore_Att",3,source)]

	[h: param_att = json.set("","source",source,"target",target,"2ndWeapon",1,"difesa",difesa)]
	[macro("combat/AttaccoCore@lib:it.aldinucci.piero.bed.maptool.ruleset"):param_att]

	[h: setProperty("PA_Attacco",PA_save,source)]
	[h: setProperty("Moltiplicatore_Att",molt_save,source)]

	[h: args = json.set("","source",source,"target",target)]
	[h: args = json.set(args,"spellName",spellName)]

	[r, if (difesa!="schivato"), code:{
		[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
		[h: critRes = macro.return]

		[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
		[h: iLL = macro.return]
	
		[h: param = json.set("","target",target,"LL",iLL,"element",elemento)]
		[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
		[h: iLP = macro.return]
	};{
		[h: iLL = 0]
	}]
	[r, if(iLL > 0), code:{
		[h: param = json.set("","target",target,"source",source,"spellToken",spellName,"critRes",critRes)]
		[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
		[h: param = json.set("","target",target,"LP",iLP,"TSRes",macro.return,"effect","Atterrato","spellName","Atterrato")]
		[macro("powers/ifTSEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	};{}]
}]

