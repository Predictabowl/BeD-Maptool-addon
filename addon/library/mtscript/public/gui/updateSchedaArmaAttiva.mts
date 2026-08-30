[h: tokenId = arg(0)]

[h: frameName = "Scheda"]
[h, macro("gui/getFrameToken@this"): frameName]
[h, if(tokenId != macro.return): return(0, "")]

[h: iArma = getArmaDaUsare(tokenId)]
[h: jsParams = json.append("", iArma)]
[h: runJsFunction(frameName, "frame", "setNextAttackWeapon", "null", jsParams)]
