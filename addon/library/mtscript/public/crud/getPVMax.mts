[h, if(argCount() > 0): tokenId = arg(0); tokenId = currentToken()]

[h: switchToken(tokenId)]
[h: iPVMax = PV_Max]
[h: return(0, iPVMax)]

<!-- TODO - auto calc PV max, needs to be integrated -->
[h: iLCPV = (LC * listGet(PV_Livello,0)) + (LC2 * listGet(PV_Livello, 1))]
[h: iMod = (Livello * (Salute-5)) + (Salute * 2) + iLCPV]
[h: broadcast("mod: " + iMod)]