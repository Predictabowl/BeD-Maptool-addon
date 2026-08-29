[h: oArma = arg(0)]

[h, if(json.type(oArma) == "OBJECT"): lTypes = json.get(oArma,"tipoDanno"); lTypes = oArma]

[h: aIcons = "[]"]
[h, if(listContains(lTypes, "T")): aIcons = json.append(aIcons, json.set("", "type", "T", "name", "Taglio", "src",  "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png"))]
[h, if(listContains(lTypes, "B")): aIcons = json.append(aIcons, json.set("", "type", "B", "name", "Botta", "src", "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png"))]
[h, if(listContains(lTypes, "P")): aIcons = json.append(aIcons, json.set("", "type", "P", "name", "Punta", "src", "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png"))]

[h: macro.return = aIcons]