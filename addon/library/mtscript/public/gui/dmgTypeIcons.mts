[h: oArma = arg(0)]
[h, if(argCount() > 1): iSize=arg(1); iSize = 16]

[h, if(json.type(oArma) == "OBJECT"): lTypes = json.get(oArma,"tipoDanno"); lTypes = oArma]

[h: sIcons = ""]
[h, if(listContains(lTypes, "T")): sIcons = strformat("%{sIcons}<img src='%s' height='%dpx' title='Taglio'></img>", getImage("Image:Slash_icon"), iSize)]
[h, if(listContains(lTypes, "B")): sIcons = strformat("%{sIcons}<img src='%s' height='%dpx' title='Botta'></img>", getImage("Image:Crush_icon"), iSize)]
[h, if(listContains(lTypes, "P")): sIcons = strformat("%{sIcons}<img src='%s' height='%dpx' title='Punta'></img>", getImage("Image:Pierce_icon"), iSize)]

[h: macro.return = sIcons]