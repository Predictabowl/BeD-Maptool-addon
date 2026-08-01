[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: iLDBonus = json.get(macro.args,"LDBonus")]
[h: target = json.get(macro.args, "target")] <!-- Opzionale -->

[h, if(target == ""): target = source]

[macro("powers/isArmaturaSpell@this"): spellName]
[h, if(macro.return), code: {
	[macro("powers/calcSpellArmorValue@this"): json.append(source, iLDBonus)]
	[iLDBonus = macro.return]
}]

[h: param = json.set("","target",source,"stato","Armatura","subito",1,"tipo","Magia")]
[h: temp = json.set("","key","LD","value",iLDBonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@this"): json.set("", "source", source, "target", target, "spellName", spellName, "effetto", oEffetto)]
