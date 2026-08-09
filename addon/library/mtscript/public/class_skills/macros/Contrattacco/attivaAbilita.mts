[h: source = macro.args]

[h: libName = "Contrattacco"]
[h: eventInstaller(source,"On_Dodge",libName,buildClassSkillMacroName("Contrattacco","specialEffect"))]
[h: eventInstaller(source,"On_Block",libName,buildClassSkillMacroName("Contrattacco","specialEffect"))]

[h: macro.return = 0]