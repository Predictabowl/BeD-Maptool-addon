[h: oArma = arg(0)]
[h, if(argCount() > 1): iSize=arg(1); iSize = 16]

[h, if(json.type(oArma) == "OBJECT"): lTypes = json.get(oArma,"tipoDanno"); lTypes = oArma]

[h: sIcons = ""]
[h, if(listContains(lTypes, "T")): sIcons = strformat("%{sIcons}<img src='%s' height='%dpx' title='Taglio'></img>", "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png", iSize)]
[h, if(listContains(lTypes, "B")): sIcons = strformat("%{sIcons}<img src='%s' height='%dpx' title='Botta'></img>", "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png", iSize)]
[h, if(listContains(lTypes, "P")): sIcons = strformat("%{sIcons}<img src='%s' height='%dpx' title='Punta'></img>", "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png", iSize)]

[h: macro.return = sIcons]