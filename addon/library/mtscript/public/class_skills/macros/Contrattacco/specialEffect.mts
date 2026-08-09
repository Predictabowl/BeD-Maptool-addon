[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(source)]

[macro("mobs/setOverrideAttackerOnTargetOpp@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target)]

[h: libName = "Contrattacco"]
[h: sNome = fetchClassSkillProp(libName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(libName)]

[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: Il prossimo attacco di %s contro %s sarà un attacco di opportunità",getName(source), getName(target))]