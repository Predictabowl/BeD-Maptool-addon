[h: sKey = arg(0)]
[h: jData = arg(1)]

[h: sToken = getMacroLocation()]
[h: sPlayer = getPlayerName()]
[h: oPlayerData = getLibMemoria(sToken,sPlayer)]
[h: oPlayerData = json.set(oPlayerData,sKey,jData)]
[h: setLibMemoria(sToken,sPlayer,oPlayerData)]