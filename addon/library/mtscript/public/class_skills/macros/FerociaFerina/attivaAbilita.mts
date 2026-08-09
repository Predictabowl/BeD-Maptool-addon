[h: source = macro.args]

[h: libName = "FerociaFerina"]
[h: eventInstaller(source,"On_Attack",libName,buildClassSkillMacroName("FerociaFerina","specialEffect"))]

[h: modLMM(source, "Natura", -1)]
[h: modLMM(source, "Atmosfera", -1)]
[h: modLMM(source, "Geosfera", -1)]

[h: macro.return = 0]