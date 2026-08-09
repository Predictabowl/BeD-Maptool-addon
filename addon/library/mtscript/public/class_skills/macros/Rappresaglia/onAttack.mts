[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sAttacker = json.get(macro.args,"attackerRappresaglia")]

[h: sLibName = "Rappresaglia"]

[h: eventUninstaller(source,"On_Attack",sLibName)]

[h, if(target != sAttacker): return(0,"")]

[h: iLiv = getLivelloAbilita(source,sLibName)]
[h: iMDI = iLiv*3]
[h: pushStatModifier(source,"Mod_Danno_Out",iMDI/100)]

[h: sNome = fetchClassSkillProp(sLibName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(sLibName)]
[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: Offre un bonus di <span style='font-weight:bold'>%+d</span> MDI",iMDI)]