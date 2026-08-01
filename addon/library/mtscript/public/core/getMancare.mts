[h: source = arg(0)]

[h: switchToken(source)]
[h: iStats = - (Presenza -5)]
[h: iMancare = iStats + Mancare + getStatModifier(source,"Mancare")]

[h: macro.return = iMancare]