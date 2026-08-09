[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "StraledellaRovina"]
[macro("powers/isMaledetto@lib:it.aldinucci.piero.bed.maptool.ruleset"): target]
[h: bAfflitto = macro.return]
[h, if(bAfflitto): sDanno = "1d8+2"; sDanno = "1d8"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]

[h, if(bAfflitto == 0), code:{
	[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]

	[h: param = json.set("","target",source,"effetto",fluffName,"subito",1,"tipo","Magia")]
	[h: temp = json.set("","macroName",buildSpellMacroName("StraledellaRovina","removeEvent"),"tipo","macroCall")]
	[h: altro = json.append("",temp)]
	[h: oEffetto = json.set(param,"params",altro,"verbose",0)]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",source,"spellName",spellName,"effetto",oEffetto)]

	[addSpellMod(source,"MALEDIZIONE","VA",50)]
	[addSpellMod(source,"MALEDIZIONE","PP",0,-0.5)]
	[addSpellMod(source,"MALEDIZIONE","PM",0,-0.5)]

	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Spellcast","name",spellName,"macroName",buildSpellMacroName("StraledellaRovina","oneShot"))]
	[macro("gui/delPoteriTipoCache@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"MALEDIZIONE")]
	[macro("gui/updatePoteri@lib:it.aldinucci.piero.bed.maptool.ruleset"): "Poteri"]
}]
