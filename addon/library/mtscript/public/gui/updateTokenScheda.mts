[h: tokenId = arg(0)]

[h, macro("gui/popSkillsToRoundUpdate@this"): tokenId]
[h: skillsToUpdate = macro.return]
[h, foreach(skillId, skillsToUpdate), code:{
    [aResources = json.get(skillsToUpdate, skillId)]
    [if(json.contains(aResources, "PF")), code:{
        [execFunction("guiUpdateClassSkillResource", json.append(tokenId, skillId, "PF"), 0, "all")]
    }]
}]