[h: oToken = arg(0)]
[h: bOverride = arg(1)]

[h: sOverride = "potereArmaLancio"]
[h, if(bOverride): pushOverride(oToken, sOverride); popOverride(oToken, sOverride)]