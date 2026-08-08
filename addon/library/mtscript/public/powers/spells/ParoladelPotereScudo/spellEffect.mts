[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(source)]

[h: spellName = "ParoladelPotereScudo"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"spellName",spellName)]
[h: iLL = macro.return]
	

<!-- effetto per rimozione dell'incantesimo al termine della durata -->

[h: nomeEff = fetchSpellProp(spellName,"nome_decorativo")]
[h: temp = json.set("","macroName","powers/spells/ParoladelPotereScudo/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: param = json.set("","target",target,"effetto",nomeEff,"tipo","Magia","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"LL",iLL,"effetto",param)]

<!-- Applica il bonus dopo l'installazione della macro di rimozione, questo per evitare di rimuovere l'effetto subito dopo averlo applicato-->
[h: value = 6 * iLL]
[macro("core/modPVT@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,value,spellName)]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]

