[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: target = listGet(target,0)]

[h: spellName = "MorsoViverna"]
[h: elemento = fetchSpellProp(spellName,"elemento")]


Bersaglio: [r: getName(target)]

[h: args = json.set("","source",source,"target",target)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: critRes = macro.return]

[macro("combat/checkDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target)]
[h: difesa = macro.return]
[h: colpito = 1]
[h, if(difesa != "schivato" && critRes != -1): colpito = 1; colpito =0]


[h: PA_save =getProperty("PA_Attacco",source)]
[h: setProperty("PA_Attacco",0,source)]

[h: param_att = json.set("","source",source,"target",target,"2ndWeapon",0,"difesa",difesa,"critRes",critRes)]
[macro("combat/AttaccoCore@lib:it.aldinucci.piero.bed.maptool.ruleset"):param_att]

[h: setProperty("PA_Attacco",PA_save,source)]


[r, if (colpito == 1), code:{


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
	[h: TSRes = macro.return]
	[macro(buildSpellMacroName("MorsoViverna","getPoisonStack")):json.set("","target",target)]
	[h: poisonStack = macro.return]


	[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName","MorsoViverna")]
	[h: durata = macro.return]

	[h: param = json.set("","target",target)]
	[h: param = json.set(param,"durata",durata)]
	[h: param = json.set(param,"effetto",fetchSpellProp(spellName,"nome_decorativo"))]
	[h: param = json.set(param,"subito",1)]
	[h: param = json.set(param,"stato","Veleno")]
	[h: param = json.set(param,"potenza",iLL)]
	[h: tipo = fetchSpellProp("MorsoViverna","tipo")]
	[h: param = json.set(param,"tipo",tipo)]
	[h: mutex = tipo+"_"+getName(source)]
	[h: param = json.set(param,"mutex",mutex)]

	[h: macroParam = json.set("","iLP",iLP,"stack",poisonStack)]
	[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("MorsoViverna","specialEffect"),"parametri",macroParam)]
	[h: altro = json.append("",temp)]

	[h: customEffect = json.set(param,"params",altro)]
	[h: param = json.set("","TSRes",TSRes,"customEffect",customEffect)]
	[macro("powers/ifTSCustomEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]

};{}]


