[h, if(argCount() > 0): tokenId = arg(0); tokenId = currentToken()]

[h: switchToken(tokenId)]
[h: iManaMax = Mana_Max + (getCarMana(tokenId) * 45)]
[h: return(0, iManaMax)]