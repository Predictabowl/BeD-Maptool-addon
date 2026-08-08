[h: difensore = json.get(macro.args,"difensore")]
[h: target = json.get(macro.args,"attaccante")]
[h: source = json.get(macro.args,"proprietario")]
[h: iCD = json.get(macro.args,"CD")]
[h: bCritRes = json.get(macro.args,"critRes")]

[h: spellName = "MarchioCompulsione"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "spellToken", spellName, "source", source, "target", target, "CD", iCD)]
[h, if(macro.return): iMolt = 1; iMolt = 3]

[h: effectName = strformat("Attivazione Marchio %{fluffName}")]

[h: param = json.set("","target",target,"durata",1,"effetto","Stordimento","moltiplicatore",iMolt)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: oEffetto = macro.return]
[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffetto]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,target)]
[h: macro.return = "<div style='border:1px black dotted'>"+popMessaggio(source,"strPotere")+"</div>"]