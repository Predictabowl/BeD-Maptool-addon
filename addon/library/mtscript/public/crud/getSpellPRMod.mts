[h: oToken = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount() > 2): options = arg(2); options = "{}"]

[h, macro("crud/getBaseRimuoviMod@this"): macro.args]
[h: iPR = macro.return + getStatModifier(oToken,"PR")]

[h, macro("powers/getSpellMod@this"): json.append(oToken,spellName,"PR")]
[h: iMod = json.get(macro.return,"mod")]
[h: iPR = iPR + iMod]

[h: macro.return = iPR]