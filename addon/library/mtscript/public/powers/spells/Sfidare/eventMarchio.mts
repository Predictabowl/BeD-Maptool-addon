[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: origine = json.get(macro.args,"origine")]
[h: iLL = json.get(macro.args,"LL")]
[h: bCritRes = json.get(macro.args,"critRes")]

[h: spellName = "Sfidare"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: effectName = strformat("Attivazione Marchio %{fluffName}")]

[sDanno = strformat("%{iLL}d3")]
[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"DannoArma",sDanno)]


[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,effectName)]

[h: iImage = fetchSpellImage("Sfidare")]
[h: msgOut = strformat("<br><img src='%{iImage}' width='25' height='25' /> %{fluffName}")]
[h: msgOut= strformat("%{msgOut}&nbsp;incrementa il danno inflitto di %{sDanno}")]

[h: macro.return = msgOut]