[h: oToken = arg(0)]

[h: sOverride = "potereArmaLancio"]
[h: bOverride = popOverride(oToken, sOverride)]
[h, if(!bOverride): pushOverride(oToken, sOverride)]