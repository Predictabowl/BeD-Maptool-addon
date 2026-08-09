[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: jEventParam = json.get(macro.args,"eventParam")]

[h: iDanno = json.get(jEventParam,"danno")]
[h, if(iDanno < 1): return(0,"")]

[h: sLibName = "Rappresaglia"]
[h: sAttacker = getSpellStartData(source,sLibName)]

[h, if(target != sAttacker): return(0,"")]

[h: jParams = json.set("","attackerRappresaglia",target)]
[h: eventInstaller(source,"On_Attack",sLibName,buildClassSkillMacroName("Rappresaglia","onAttack"),jParams)]

[h: sNome = fetchClassSkillProp(sLibName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(sLibName)]
[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: si attiva per %s",getName(source))]