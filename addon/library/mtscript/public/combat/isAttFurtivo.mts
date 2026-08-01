[h: source = arg(0)]

[h: switchToken(source)]
[h: bFurtivo = getSpellStartData(source, "InfliggeAttaccoFurtivo")]

[h, if(bFurtivo == ""): bFurtivo = 0]

[h: macro.return = bFurtivo]