[h: tokenId = arg(0)]
[h: heroPoints = arg(1)]

[h: frameName = "PannelloAbilita"]
[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[h: tokenFrame = json.get(frameProp,"value")]
[h, if(tokenFrame != tokenId): return(0,"")]

[r: runJsFunction(frameName, "frame", "updateHeroicBar", "null", json.append("", heroPoints))]