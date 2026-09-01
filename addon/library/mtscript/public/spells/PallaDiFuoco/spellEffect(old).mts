<!-- DEPRECATED -->
[h: source = json.get(macro.args,"source")]
[h: id = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: spellName = "PallaDiFuoco"]
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
[h, if(iLL > 0), code:{
	[h: param = json.set("","LP",iLP,"dmgLP","1d6","elemento",elemento,"target",id,"source",source)]
	[macro("powers/getSpellDamage@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: danno = macro.return]

<!- Qua viene usata la Conditional macro, funziona ancora ma la ritengo non più supportata perché è troppo macchinosa da scrivere e se ne può fare a meno -->

	[h: param = json.set("","target",id,"valore",danno,"verbose",0)]
	[h: param = encode(param)]
	[h: param = "target="+source+"; baseMacro= core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset;  params ="+param]
	[macro("conditionalMacro@Lib:General"): param]
	
	[h: param = json.set("","target",id,"source",source,"spellToken",spellName,"critRes",critRes)]
	[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	
	[h: param = json.set("","target",id,"LP",iLP,"TSRes",macro.return,"effect","Incendio","spellName",fetchSpellProp(spellName,"nome_decorativo"))]
	[macro("powers/ifTSEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]

<!--- Qua sotto la sezione per il messaggio su console -->
	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,id)]
}]

