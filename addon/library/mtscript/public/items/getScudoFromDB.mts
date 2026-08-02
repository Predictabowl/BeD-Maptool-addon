[h: sArma = arg(0)]

[h: oArmi = getLibProperty("Scudi_Json",getMacroLocation())]
[h: oScudo = json.get(oArmi,sArma)]
[h: oScudo = json.set(oScudo,"categoria","scudo")]
[h: macro.return = oScudo]