[h: iLPG = arg(0)]
[h: iLL = arg(1)]

[h: fVar = (math.pow(iLPG, 1.25)/4.681 - iLL +8)*0.11]
[h, if(fVar >= 0): fVar = 1 + fVar; fVar = 1/(1 - fVar)]

[h: return(0,fVar)]