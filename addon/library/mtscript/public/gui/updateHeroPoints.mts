[h: tokenId = arg(0)]

[h: frameName = "PannelloAbilita"]
[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[h: tokenFrame = json.get(frameProp,"value")]
[h, if(tokenFrame != tokenId): return(0,"")]

[h: heroPoints = getPuntiEroe(tokenId)]
[r: runJsFunction(frameName, "frame", "updateHeroicBar", "null", json.append("", heroPoints))]