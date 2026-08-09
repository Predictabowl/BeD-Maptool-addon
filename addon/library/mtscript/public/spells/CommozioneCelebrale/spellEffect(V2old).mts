[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: sEffetto = "Stordimento"]
[h: spellName = "CommozioneCelebrale")]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: nomeEffetto = strformat("%s(%s)",nomeDec,getName(source))]
[h: nomeEffAux = strformat("%{nomeEffetto}-[%s]",sEffetto)]

[h: iDurata = getSpellDurata(source,spellName,target)]

[macro("core/popStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"EnergiaDistruttiva")]
[h, if(macro.return > 0): iDurata = iDurata +2]

[h: sDmg = "1"]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,spellName)]
[h: iLL = macro.return]
[h: iLP = getLP(source,target,iLL,spellName)]


[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",1,"nome",nomeEffAux)]
[h: oEffetto = json.set(macro.return,"tipo","NASCOSTO")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"durata",iDurata,"effetto",oEffetto,"LL",iLL)]
[h: bTS = json.get(macro.return,"TSResult")]
[h, if(bTS): nomeEffetto = ""]


[h: oEffetto = json.set("","target",target,"effetto",nomeEffetto,"subito",1,"tipo","Magia","verbose",0)]
[h: macroParam = json.set("","danno",sDmg,"durata",iDurata,"effettoAux",nomeEffAux,"LL",iLL,"LP",iLP,"spellLib",spellName,"lanciatore",source,"critRes",getUltimoCritico(source),"potenzaCritico",getPCrit(source))]
[h: temp = json.set("","tipo","macroCall","macroName","spells/CommozioneCelebrale/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",macroParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto ,"params",altro)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"LL",iLL,"durata",iDurata,"bloccaTS",1)]



