[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: sLibName = "PrecisioneLetale"]


[h: iLiv = getLivelloAbilita(source,sLibName)]
[h: sDanno = iLiv+"d6"]
[h: addDannoArmaAgg(source, sLibName, sDanno)]
[h: eventUninstaller(source,"On_Attack",sLibName)]
[h: eventInstaller(source, "On_Action_Teardown", sLibName, "class_skills/macros/PrecisioneLetale/removeDamage@lib:it.aldinucci.piero.bed.maptool.ruleset")]

[h: sNome = fetchClassSkillProp(sLibName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(sLibName)]
[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: <span style='font-weight:bold'>+%{sDanno}</span> danni aggiuntivi")]