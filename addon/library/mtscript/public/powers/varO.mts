[h: iLiv = arg(0)]
[h: iBase = arg(1)]

[h, if(iLiv > 30): fMod = 0.05; fMod = 0.016]

[h: iAdd = max(30 - iLiv, 0)]
[h: fMolt = (30 - iLiv)*fMod]
[h: fMolt = 1 - calcConRitornoMarginale(-fMolt,0.4,0.9)]
[h: fResult = (iBase * fMolt) + iAdd]

[h: return(0, fResult)]

<!-- Old moltiplier -->
[h: fMolt = (30 - iLiv)*0.05]
[h: fMolt = 1 - calcConRitornoMarginale(-fMolt,0.4,0.9)]