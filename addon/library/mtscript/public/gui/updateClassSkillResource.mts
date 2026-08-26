[h: tokenId = arg(0)]
[h: skillId = arg(1)]
[h: resource = arg(2)]

[h: frameName = "PannelloAbilita"]
[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[h: tokenId = json.get(frameProp,"value")]

[h, switch(resource), code:
    case "PF": {
        [macro("class_skills/getAbilitaPF@this"): json.append(tokenId, skillId)]
        [h: runJsFunction(frameName, "frame", "setResourceValue", "null", json.append("", skillId, resource, macro.return))]
    }
]

