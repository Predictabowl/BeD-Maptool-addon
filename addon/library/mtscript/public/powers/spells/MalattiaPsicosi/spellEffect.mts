[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: id = listGet(target,0)]


[h: spellName = "MalattiaPsicosi"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

Bersaglio: [r: getName(id)]

[h: args = json.set("","source",source,"target",id)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: param = json.set("","target",id,"LL",iLL,"element",elemento)]
[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLP = macro.return]


[r, if(iLL > 0), code:{
	[macro("combat/checkDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,id)]
	[h: difesa = macro.return]

	[h: param = json.set("","target",id,"source",source,"spellToken",spellName)]
	[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	[h: TSRes = macro.return]

	[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",id,"spellName","MalattiaPsicosi")]
	[h: durata = macro.return]

	[h: param = json.set("","target",id)]
	[h: param = json.set(param,"durata",durata)]
	[h: param = json.set(param,"effetto","Malattia_Psicosi")]
	[h: param = json.set(param,"subito",1)]
	[h: param = json.set(param,"stato","Malato")]
	[h: param = json.set(param,"potenza",iLL)]
	[h: tipo = fetchSpellProp("MalattiaPsicosi","tipo")]
	[h: param = json.set(param,"tipo",tipo)]
	[h: mutex = tipo+"_"+getName(source)]
	[h: param = json.set(param,"mutex",mutex)]

	[h: temp = json.set("","tipo","macroCall","macroName","powers/spells/MalattiaPsicosi/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset")]
	[h: altro = json.append("",temp)]


	[h: customEffect = json.set(param,"params",altro)]
	[h: param = json.set("","TSRes",TSRes,"customEffect",customEffect)]
	[macro("powers/ifTSCustomEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
};{}]
