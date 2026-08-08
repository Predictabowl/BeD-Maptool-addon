[h: source = json.get(macro.args,"source")]

[h: temp = json.set("","key","Crit","value",11,"tipo","onceMod")]
[h: oEffetti = json.append("",temp)]
[h: temp = json.set("","key","PCrit","value",11,"tipo","onceMod")]
[h: oEffetti = json.append(oEffetti,temp)]

[h: oParams = json.set("","source",source,"spellName","PreghieraFerocia","effetti",oEffetti)]
[h, macro("powers/preghieraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oParams]