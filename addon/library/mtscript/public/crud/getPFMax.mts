[h, if(argCount() > 0): tokenId = arg(0); tokenId = currentToken()]

[h: switchToken(tokenId)]
[h: iPFMax = PF_Max + ((Vigore + Resistenza) * 7)]
[h: return(0, iPFMax)]