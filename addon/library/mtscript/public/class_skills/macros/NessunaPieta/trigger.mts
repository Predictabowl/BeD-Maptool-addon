[h: defender = json.get(macro.args,"source")]
[h: attacker = json.get(macro.args,"target")]
[h: source = json.get(macro.args, "tokenToExclude")]

[h, if(attacker == source): return(0, "")]

[h: sLibName = "NessunaPieta"]
[h: iUsed = getDaMemoriaRound(source, sLibName)]
[h, if(iUsed != ""): return(0, "")]
[h: setInMemoriaRound(source, sLibName, 1)]
[macro("mobs/setOverrideAttackerOnTargetOpp@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, defender)]


[h: sNome = fetchClassSkillProp(sLibName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(sLibName)]
[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: %s guadanga un attacco di opportunità contro %s", getName(source), getName(defender))]