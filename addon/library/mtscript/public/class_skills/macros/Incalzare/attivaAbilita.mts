[h: source = arg(0)]

[h: sLibName = "Incalzare"]
[h: sEvento = listGet(fetchClassSkillProp(sLibName,"eventi"),0)]
[h: switchToken(source)]
[h: VA = VA +5]

[h: eventInstaller(source,sEvento,sLibName,"class_skills/macros/Incalzare/trigger@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: macro.return = 0]