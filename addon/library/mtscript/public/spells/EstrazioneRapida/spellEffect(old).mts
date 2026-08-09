[h: source = json.get(macro.args,"source")]


[macro("mobs/cambiaStileWrapper@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[macro("mobs/cambiaArmaWrapper@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h, if(!json.isEmpty(macro.return)), code:{
	[oCambioParam = json.set(macro.return,"costoPA",0)]
	[macro("combat/risolviCambioArma@lib:it.aldinucci.piero.bed.maptool.ruleset"): oCambioParam]
}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]
