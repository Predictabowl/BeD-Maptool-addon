<!-- Per usare questo il costo PF deve NON essere un numero -->
[h: oToken = arg(0)]

[h: iLC = getLivelloClasse(oToken,"Druido")]
[h, if(iLC < 1): iLC = 30]
[h: iPFBase = 16+iLC]

[h: macro.return = iPFBase]