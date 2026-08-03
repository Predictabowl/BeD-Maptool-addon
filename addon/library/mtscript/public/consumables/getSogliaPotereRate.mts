[h: oToken = arg(0)]
[h: oOggetto = arg(1)]

[h: iTokenLiv = getProperty("Livello",oToken)]
[h: iItemLiv = json.get(oOggetto,"livello")]
[h: iDelta = max(iTokenLiv-iItemLiv,0)]

[h: macro.return = 100 - round(math.pow(iDelta,1.7)*2)]