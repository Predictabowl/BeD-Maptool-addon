[h: frameName = "PannelloAbilita"]
[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[h: tokenId = json.get(frameProp,"value")]

[h: heroPoints = getPuntiEroe(tokenId)]
[h, macro("class_skills/getAbilitaInUso@this"): tokenId]
[h: aSkillInUso = macro.return]
[h: runJsFunction(frameName, "frame", "refreshAllValues", "null", json.append("", aSkillInUso, heroPoints))]
