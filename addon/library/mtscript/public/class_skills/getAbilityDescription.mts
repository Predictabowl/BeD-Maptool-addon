[h: libName = arg(0)]
[h: oToken = arg(1)]

[h: sText = fetchClassSkillProp(libName,"descrizione")]
[h: id = strfind(sText, "%(s|\\+d)")]
[h, if(getFindCount(id) < 1): return(0, sText)]

[h, macro(buildClassSkillMacroName(libName,"formatDescription")): json.append(oToken, sText)]