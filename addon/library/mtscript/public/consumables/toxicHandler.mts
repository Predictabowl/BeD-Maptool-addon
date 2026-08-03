[h: oToken = arg(0)]
[h: oOggetto = arg(1)]

[h: iResult = 0]

[h: iTox = getTossicoOggetto(oOggetto, oToken)]
[h, if(iTox < 1): return (0,0)]

[h: iTokenTox = getTossicoLiv(oToken)+iTox]
[h: macro.return = setTossicoLiv(oToken,iTokenTox)]
[h: macro.return = iResult]