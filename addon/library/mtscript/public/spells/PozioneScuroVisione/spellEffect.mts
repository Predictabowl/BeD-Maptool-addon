[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: extraParam = json.get(macro.args,"extraParam")]

[h: spellName = "PozioneScuroVisione"]
[h: sTipo = getLibProperty("tipo",spellName)]
[h: sNomeEff = getLibProperty("nome_decorativo",spellName)]

[h: sVisione = getSightType(source)]
[h: oParam = json.set("","vistaOriginale",sVisione)]
[h: temp = json.set("","macroName","spells/PozioneScuroVisione/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall","parametri",oParam)]
[h: altro = json.append("",temp)]

[h: oEffetto = json.set("","target",source,"effetto",sNomeEff,"tipo","Utile","params",altro,"verbose",0,"categoria",sTipo,"mutex",sTipo)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[h: setSightType("Scurovisione",source)]
[macro("mobs/addVistaPersonaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"Scurovisione")]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]