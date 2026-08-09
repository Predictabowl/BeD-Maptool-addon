[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iCrit = json.get(macro.args,"critMod")]

[h, macro(buildClassSkillMacroName("PotenzaEmpia","applyCritEffect")): json.append(source, iCrit)]