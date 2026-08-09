[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: libName = "EnergiaDistruttiva"]
[h: sNome = fetchClassSkillProp(libName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(libName)]
[h: iMod = 3]
[h: oServitore = getServitore(source)]
[h, if(oServitore != ""): iMod = iMod + 17]
[h: pushStatModifier(source,"Mancare",iMod)] 

[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: %+d Mancare",iMod)]