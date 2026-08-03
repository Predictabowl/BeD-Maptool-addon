[h: sKey = arg(0)]

[h: sToken = getMacroLocation()]
[h: sPlayer = getPlayerName()]
[h: oPlayerData = getLibMemoria(sToken,sPlayer)]

[h, if(json.isEmpty(oPlayerData)): return(0,"")]
[h: macro.return = json.get(oPlayerData,sKey)]
