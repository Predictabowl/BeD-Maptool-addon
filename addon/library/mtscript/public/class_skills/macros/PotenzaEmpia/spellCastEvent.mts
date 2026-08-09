[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iCrit = json.get(macro.args,"critMod")]

[h, macro("class_skills/macros/PotenzaEmpia/applyCritEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, iCrit)]