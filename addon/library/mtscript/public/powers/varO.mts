[h: iLiv = arg(0)]

[h: fVar = (30 - iLiv)*0.05]
[h: fVar = 1 - calcConRitornoMarginale(-fVar,0.4,0.9)]

[h: return(0,fVar)]