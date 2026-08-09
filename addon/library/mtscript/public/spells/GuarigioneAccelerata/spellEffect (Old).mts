[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: spellName = "GuarigioneAccelerata"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

[h: args = json.set("","source",source,"target",target)]
[h: args = json.set(args,"spellName",spellName)]
[macro("combat/getUltimoCritico@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: critRes = macro.return]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]

[h: fluffName = fetchSpellProp("GuarigioneAccelerata","nome_decorativo")]
[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName","GuarigioneAccelerata")]
[h: spellDur = macro.return]

[h: param = json.set("","LL",iLL,"healLL","2","target",target,"source",source)]
[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: iCura = macro.return]


[h: param = json.set("","target",target,"durata",spellDur,"effetto",fluffName,"subito",1,"stato","Rigenerazione","potenza",iLL,"tipo","Magia","verbose",0)]
[h: temp = json.set("","tipo","cura","value",iCura)]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro)]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]