[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "ArmaturaOssa"]

[h: sTipo = fetchSpellProp(spellName,"tipo")]


<!-- effetto per rimozione dell'incantesimo al termine della durata -->

[h: nomeEff = fetchSpellProp(spellName,"nome_decorativo")]
[h: param = json.set("","target",target,"effetto",nomeEff,"stato","Protezione","tipo","Benefico","Categoria",sTipo,"verbose",0)]

[h: temp = json.set("","macroName","powers/spells/ArmaturaOssa/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(param,"params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: iLL = json.get(macro.return,"LL")]




<!-- Applica il bonus dopo l'installazione della macro di rimozione, questo per evitare di rimuovere l'effetto subito dopo averlo applicato-->
[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","LL",iLL,"healLL",5,"target",target,"source",source)]
[macro("core/modPVT@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,macro.return,spellName)]
