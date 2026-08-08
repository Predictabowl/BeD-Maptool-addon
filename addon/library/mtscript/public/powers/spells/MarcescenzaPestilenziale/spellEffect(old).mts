[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MarcescenzaPestilenziale"]

[h, if(getState("Veleno",target)): sDanno = "1d3-1"; sDanno = "1d2-1"]

[h: sEffetto = "Nausea"]

[h: sNomeEffAux = strformat("%{sEffetto} (%s-%s)",fetchSpellProp(spellName,"nome_decorativo"),getName(source))]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",1,"nome",sNomeEffAux)]
[h: oEffetto = json.set(macro.return,"tipo","NASCOSTO")]

[h: oSpellEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]
[h: sDotMsg = popMessaggio(target,"msgEffetto")]
[h, if(sDotMsg != ""): sDotMsg = "<div>"+sDotMsg+"</div>"]


[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",sDanno,"stato","","categoria","MAGIA","bloccaTS",1,"effettoAux",sNomeEffAux)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
[h: appendMessaggio(target,"msgEffetto",sDotMsg)]

