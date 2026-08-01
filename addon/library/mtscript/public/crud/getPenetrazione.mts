[h: oToken = arg(0)]
[h: iArma = arg(1)]

[h: oArma = getArma(oToken, iArma)]
[h: iPenA = getArmaStat(oArma, "Penetrazione")]
[h: macro.return = getProperty("Pen_Base") + iPenA]