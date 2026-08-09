[h: source = macro.args]

[h: libName = "FuroreElementale"]
[h: eventInstaller(source,"On_Spellcast",libName,buildClassSkillMacroName("FuroreElementale","messaggioEvento"))]
[h: eventInstaller(source,"On_Attack",libName,buildClassSkillMacroName("FuroreElementale","specialEffect"))]

[h: macro.return = 0]