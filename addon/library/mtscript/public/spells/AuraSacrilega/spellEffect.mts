[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AuraSacrilega"]

[h, if (isHostile(source,target)), code:{
	[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","target",target,"source",source,"spellToken",spellName)]
	[if(macro.return): return(0,1)]
}]


[h: iMod = -3]

[h: temp = json.set("","key","Res_Malattia","tipo","onceMod","value",iMod)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Res_Maledizione","tipo","onceMod","value",iMod)]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","params",altro,"verbose", 0, "stato","AuraOscura","subito",1)]


[h: jParams = json.set("", "origine", target, "caster", source, "spellName", spellName,
	"effetto", oEffetto)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]
