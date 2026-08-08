[h: source = json.get(macro.args,"source")]

[h: spellName = "FoschiaCadaverica"]

<!-- Effetti da applicare -->

[h: oEffetto = json.set("","stato","Copertura","subito",1)]

[h: temp = json.set("","tipo","onceMod","key","Elusione","value",20)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]


[h: jParams = json.set("", "origine", source, "caster", source, "spellName", spellName,
	"effetto", oEffetto, "isStatic", 1)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]