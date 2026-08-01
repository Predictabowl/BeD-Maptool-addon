[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: fBase = (Volonta-5)*25]
[h: fMod = getStatModifier(oToken,"FRM")]
[h: macro.return = fBase + fMod]