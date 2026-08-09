[h: source = json.get(macro.args,"source")]
[h: target = source]


[h: switchToken(source)]
[h: spellName = "FocalizzatosulBersaglio"]

[h: name = fetchSpellProp(spellName,"nome_decorativo")]
[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName)]
[h: iDurata = macro.return]

[h: spellType = fetchSpellProp(spellName,"tipo")]
[h: param = json.set("","target",source,"durata",iDurata,"effetto",name,"stato","Maestria","subito",1,"potenza",0,"tipo","Magia","mutex",spellType)]

[h: temp = json.set("","key","Schivare","value",-8,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Danno_Arma1","value","1d8","tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","Danno_Arma2","value","1d8","tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]