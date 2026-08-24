[h: skillId = arg(0)]
[h: bStatus = arg(1)]

[h: frameName = "PannelloAbilita"]
[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[r: runJsFunction(frameName, "frame", "setSkillActiveStatus", "null", json.append(skillId, bStatus))]