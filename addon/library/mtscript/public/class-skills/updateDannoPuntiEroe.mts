[h: oToken = arg(0)]
[h: iDanno = arg(1)]

[h: return (0,0)]

<!-- Punti eroe da danno disabilitati -->
[h: iModPE = floor(((300+roll(1,100))*iDanno)/getProperty("PV_Max",oToken))]
[h: modPuntiEroe(oToken, iModPE)]