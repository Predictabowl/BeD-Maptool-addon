[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(eventParam,"spellName")]
[h: sTipo = lower(fetchSpellProp(spellName,"tipo"))]
[h, if(sTipo != "offensivo"): return (0,"")]

[h: libName = "FuroreElementale"]
[h: sNome = fetchClassSkillProp(libName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(libName)]

[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: +10 MDI, +1 CD")]