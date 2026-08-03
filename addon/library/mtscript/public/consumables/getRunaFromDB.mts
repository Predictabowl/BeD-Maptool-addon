[h: sRuna = arg(0)]

[h: jRune = getLibProperty("Rune_DB", getMacroLocation())]
[h: macro.return = json.get(jRune, sRuna)]