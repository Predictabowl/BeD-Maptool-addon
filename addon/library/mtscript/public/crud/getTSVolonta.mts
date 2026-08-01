[h: idToken = arg(0)]

[h: switchToken(idToken)]
[h: iTS = TS_Vol + Volonta -5 + floor(Livello/5)]
[h: iTS = iTS + getStatModifier(idToken, "TS_Vol") + getStatModifier(idToken, "TS")]
[h: macro.return = iTS]