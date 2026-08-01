[h: iLMM = arg(0)]

[h: fVar = (6 - iLMM)*0.2]

[h: fVar = 1 - calcConRitornoMarginale(-fVar,0.4,0.9)]
[h: return(0,fVar)]
