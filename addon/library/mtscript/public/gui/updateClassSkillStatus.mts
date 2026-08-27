[h: tokenId = arg(0)]
[h: skillId = arg(1)]
[h: isActive = arg(2)]

[h: frameName = "PannelloAbilita"]
[h, macro("gui/getFrameToken@this"): frameName]
[h, if(tokenId != macro.return): return(0, "")]

[h: runJsFunction(frameName, "frame", "setSkillActiveStatus", "null", json.append("", skillId, isActive))]
