[h: tokenId = arg(0)]
[h: frameName = arg(1)]
[h: jsFunction = arg(2)]
[h: jsParams = arg(3)]

[h, macro("gui/getFrameToken@this"): frameName]
[h, if(tokenId != macro.return): return(0, "")]

[h: runJsFunction(frameName, "frame", jsFunction, "null", jsParams)]