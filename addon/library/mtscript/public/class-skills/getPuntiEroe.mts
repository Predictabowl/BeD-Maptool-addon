[h: oToken = arg(0)]

[h: iPE = getDaMemoria(oToken,"PUNTI_EROE")]
[h, if(!isNumber(iPE)): iPE = 0]

[h: macro.return = iPE]