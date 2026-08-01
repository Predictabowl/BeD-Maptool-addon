[h: oToken = arg(0)]
[h: iMod = arg(1)]

[macro("class-skills/getPuntiEroe@this"): oToken]
[h: iPE = macro.return]
[h: iPE = iPE + iMod]
[h, if (iPE < 0): iPE = 0]
[h, if(iPE > 1000): iPE = 1000]
[h: setInMemoria(oToken,"PUNTI_EROE", iPE)]