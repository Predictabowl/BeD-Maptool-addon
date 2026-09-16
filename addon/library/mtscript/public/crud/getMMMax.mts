[h, if(argCount() > 0): tokenId = arg(0); tokenId = currentToken()]

[h: switchToken(tokenId)]
[h: iMMMax = MM_Max + Equilibrio -5]
[h: return(0, iMMMax)]