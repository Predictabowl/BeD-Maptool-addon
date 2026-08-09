[h: source = macro.args]

[h: sLibName = "PrecisioneLetale"]
[h: eventInstaller(source, "On_Attack", sLibName, "class_skills/macros/PrecisioneLetale/specialDamage@lib:it.aldinucci.piero.bed.maptool.ruleset")]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("danno bonus sul prossimo attacco"))]
[h: macro.return = 0]
