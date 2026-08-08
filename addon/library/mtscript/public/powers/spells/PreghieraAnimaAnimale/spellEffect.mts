[h: source = json.get(macro.args,"source")]
[h: oOrigine = json.get(macro.args,"target")]

[h: spellName = "PreghieraAnimaAnimale"]

[h: oEffetto = json.set("","stato","Preghiera","subito",1,"mutex","Effetto-Preghiera")]

[h: iBonus = 8]
[h: temp = json.set("","key","Crit","value",iBonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PCrit","value",iBonus,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","VA","value",10,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]



[h: jParams = json.set("", "origine", oOrigine, "caster", source, "spellName", spellName,
	"effetto", oEffetto, "mutex", "Generatore-Preghiera")]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]
