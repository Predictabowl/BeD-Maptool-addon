[h: tokenId = arg(0)]

[h: frameName = "Scheda"]
[h, macro("gui/getFrameToken@this"): frameName]
[h, if(tokenId != macro.return): return(0, "")]

[h: runJsFunction(frameName, "frame", "updateDannoArmi", "null", "[]")]
