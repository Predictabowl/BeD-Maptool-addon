[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: spellName = "FlussoVitale"]
[h: elemento = fetchSpellProp(spellName,"elemento")]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]

[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: param = json.set("","LL",iLL,"healLL","1","target",target,"source",source)]
[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: iCura = macro.return]

[h: oEffetto = json.set("","target",target,"effetto",fluffName,"stato","Rigenerazione","tipo","Magia","LL",iLL)]
[h: temp = json.set("","tipo","cura","value",iCura,"source",source)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto)]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]