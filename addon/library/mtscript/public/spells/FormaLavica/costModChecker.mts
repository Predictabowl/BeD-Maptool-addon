[h: source = arg(0)]
[h: spellName = arg(1)]
[h: modType = arg(2)]

[h: sElemento = getSpellElement(source, spellName)]
[h, if(sElemento != "FUOCO" && sElemento != "FISICO"): bMod = 1; bMod = 0]

[h: macro.return = bMod]