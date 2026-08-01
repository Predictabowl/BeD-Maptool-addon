[h: iValue = arg(0)]

[h: fProb = calcConRitornoMarginale(iValue,32,66)/100]
[h: return(0,fProb)]

<!-- OLD -->
[h: fExp = -0.03 * iValue]
[h: fProb = (1-math.pow(2,fExp))*0.65]
[h: macro.return = fProb]