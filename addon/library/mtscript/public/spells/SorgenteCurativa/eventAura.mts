[h: source = json.get(macro.args,"auraOwner")]
[h: target = json.get(macro.args,"source")]


[h: idAura = fetchSpellProp("SorgenteCurativa","nome_decorativo")]

[macro("powers/updateSTAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,idAura)]
