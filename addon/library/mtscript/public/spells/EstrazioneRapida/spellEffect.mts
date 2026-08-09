[h: source = json.get(macro.args,"source")]


[oCambioParam = json.set(macro.args,"costoPA",0)]
[macro("combat/risolviCambioArma@lib:it.aldinucci.piero.bed.maptool.ruleset"): oCambioParam]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]
