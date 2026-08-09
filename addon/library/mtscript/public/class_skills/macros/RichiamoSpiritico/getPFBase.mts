[h: oToken = arg(0)]

[h: iLiv = getLivelloAbilita(oToken,"RichiamoSpiriticoEfficiente")]
[h: iPFBase = 10 - 3*iLiv]

[h: macro.return = iPFBase]