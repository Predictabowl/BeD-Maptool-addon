[h: source = json.get(macro.args,"target")]
[h: oParam = json.get(macro.args,"param")]


[h: idAura = json.get(oParam,"idAura")]
[h: switchToken(source)]

[h: oAura = json.get(Aure_Attive,idAura)]
[h: oAura = json.set(oAura,"BersagliColpiti","")]
[h: Aure_Attive = json.set(Aure_Attive,idAura,oAura)]

[macro("powers/updateSingleAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,idAura)]
