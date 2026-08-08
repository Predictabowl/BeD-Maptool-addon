[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Inferno"]

[h, if(isEnergiaDistruttiva(source)): sDanno = "1d4"; sDanno = "1d3"]

[h: sStato = "Incendio"]

[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno", sDanno,"stato",sStato,
	"categoria",sStato,"inizioRound",1)]