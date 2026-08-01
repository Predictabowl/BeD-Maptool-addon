[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sMacroCosto = json.get(macro.args,"macroCosto")] <!-- Opzionale -->
[h: sMCostoParam = json.get(macro.args,"macroCostoParam")] <!-- Opzionale -->


[h: switchToken(source)]
[h, if(json.type(Mantenimenti) != "OBJECT"): Mantenimenti = "{}"]

[h, if(sMacroCosto == ""), code:{
	[sMacroCosto = "powers/getCostoMant@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[sMCostoParam = json.append(source,spellName)]
}]

[h: nomeDec = getLibProperty("nome_decorativo",spellName)]
[h: oMant = json.set("","macroCosto",sMacroCosto,"macroCostoParam",sMCostoParam,"nome",nomeDec)]
[h: Mantenimenti = json.set(Mantenimenti,spellName,oMant)]