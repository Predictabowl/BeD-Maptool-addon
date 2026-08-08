[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Immolare"]

[macro("powers/isEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return > 0): pushStatModifier(source,"durataMod",2)]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d4")]
[h: iLL = json.get(macro.return,"LL")]
[h: iLP = json.get(macro.return,"LP")]

[h: sStato = "Incendio"]

[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato",sStato,
	"categoria",sStato,"LL",iLL,"LP",iLP,"inizioRound",0)]