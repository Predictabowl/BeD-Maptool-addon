[h: source = macro.args]

[h: sLibName = "PrecisioneLetale"]
[h: eventInstaller(source, "On_Attack", sLibName, buildClassSkillMacroName("PrecisioneLetale","specialDamage"))]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("danno bonus sul prossimo attacco"))]
[h: macro.return = 0]
