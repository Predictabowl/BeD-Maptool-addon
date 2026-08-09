[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: libName = "Esecuzione"]
[h: iLA = getLivelloAbilita(source,libName)]
[h: pushStatModifier(source,"LA",iLA)]

[h: sNome = fetchClassSkillProp(libName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(libName)]

[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: %+d LA",iLA)]