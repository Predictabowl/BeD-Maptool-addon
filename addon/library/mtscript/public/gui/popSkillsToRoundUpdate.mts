[h: tokenId = arg(0)]


[h: sProp = "skills_resource_round_update"]
[h: sLib = getMacroLocation()]
[h: jSkills = getLibProperty(sProp, sLib)]
[h: setLibProperty(sProp, "{}", sLib)]
[h: macro.return = jSkills]