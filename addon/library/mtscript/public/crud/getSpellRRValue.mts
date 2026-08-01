[h: oToken = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount() > 2): options = arg(2); options = "{}"]

[h, macro("crud/getBaseRimuoviMod@this"): macro.args]
[h: iRR = macro.return + getStatModifier(oToken,"RR")]

[macro("powers/getSpellMod@this"): json.append(oToken,spellName,"RR")]
[h: iMod = json.get(macro.return,"mod")]
[h: iRR = iRR + iMod]

[h: macro.return = iRR + 11]