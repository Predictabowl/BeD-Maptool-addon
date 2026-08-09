[h: source = macro.args]

[h: libName = "Rappresaglia"]
[h: eventInstaller(source,"On_Attacked",libName,buildClassSkillMacroName("Rappresaglia","onAttacked"))]
[h: eventInstaller(source,"On_Damaged",libName,buildClassSkillMacroName("Rappresaglia","onDamaged"))]

[h: macro.return = 0]