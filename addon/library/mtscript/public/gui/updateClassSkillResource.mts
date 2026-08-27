[h: tokenId = arg(0)]
[h: skillId = arg(1)]
[h: resource = arg(2)]

[h: frameName = "PannelloAbilita"]
[h, macro("gui/getFrameToken@this"): frameName]
[h, if(tokenId != macro.return): return(0, "")]

[h, switch(resource), code:
    case "PF": {
        [macro("class_skills/getAbilitaPF@this"): json.append(tokenId, skillId)]
        [h: runJsFunction(frameName, "frame", "setResourceValue", "null", json.append("", skillId, resource, macro.return))]
    }
]

