[h: oToken = arg(0)]
[h, if(argCount() > 1): sSpirito = arg(1); sSpirito = getSpiritoAttivo(oToken)]

[macro("powers/getModRichiamoSpirito@this"): json.append(oToken,sSpirito)]
[h: macro.return = min(macro.return*16, 100)]