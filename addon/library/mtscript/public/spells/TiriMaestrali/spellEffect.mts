[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "TiriMaestrali"]
[h: sElemento = fetchSpellProp(spellName,"elemento")]
[h: sTSType = fetchSpellProp(spellName,"TS")]


[h: name = fetchSpellProp(spellName,"nome_decorativo")]

[h: bonus = 5]

[h: spellType = fetchSpellProp(spellName,"tipo")]
[h: param = json.set("","target",source,"effetto",name,"stato","Maestria","subito",1,"tipo","Fisico")]

[h: temp = json.set("","key","LA","value",bonus,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]