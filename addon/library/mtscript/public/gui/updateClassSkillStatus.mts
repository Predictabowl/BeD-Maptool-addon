[h: tokenId = arg(0)]
[h: skillId = arg(1)]
[h: isActive = arg(2)]

[h: frameName = "PannelloAbilita"]
[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[h: tokenId = json.get(frameProp,"value")]

[h: runJsFunction(frameName, "frame", "setSkillActiveStatus", "null", json.append("", skillId, isActive))]
