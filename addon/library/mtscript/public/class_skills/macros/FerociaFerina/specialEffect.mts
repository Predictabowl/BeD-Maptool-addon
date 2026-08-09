[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: bMuta = getState("Mutaforma",source)]
[h, if(!bMuta): return(0,"")]

[h: libName = "FerociaFerina"]

[h: sNome = fetchClassSkillProp(libName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(libName)]

[h: iLA = getLivelloAbilita(source, libName)]
[h: pushStatModifier(source,"LA",iLA)]

[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: %+d LA",iLA)]