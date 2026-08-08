[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "IncendioIndomabile"]

[macro("powers/isEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return), code:{
	[pushStatModifier(source, "durataMod", 2)]
}]

[h: sDot = "1"]
[h: sStato = "Incendio"]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno",sDot,"stato",sStato, "categoria", sStato)]

