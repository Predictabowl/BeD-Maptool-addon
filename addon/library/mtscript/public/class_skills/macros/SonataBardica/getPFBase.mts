[h: oToken = arg(0)]

[h: iLiv = getLivelloAbilita(oToken,"SonataEfficiente")]
[h: iPFBase = 21- 4*iLiv]

[h: macro.return = iPFBase]