[h: source = json.get(macro.args,"source")]
[h: caster = json.get(macro.args,"caster")]
[h: idAura = json.get(macro.args,"idAura")]
[h: nomeMacro = json.get(macro.args,"nomeMacro")]
[h: oMacroParam = json.get(macro.args,"macroParam")]
[h: iAOE = json.get(macro.args,"AOE")]
[h: iPortata = json.get(macro.args,"portata")]
[h: sFOF = json.get(macro.args,"FOF")]
[h: sTipoMov = json.get(macro.args,"tipoMov")]
[h: iVisualAura = json.get(macro.args,"visualizza")]
[h: bTransitable = json.get(macro.args,"isTransitable")] <!-- Opzionale, indica che può attivarsi anche solo passando -->


[macro("powers/determinaAuraTargets@this"): json.append(caster,sFOF)]
[h: sFOF = macro.return]

[h, if(sTipoMov == ""): sTipoMov = "FOLLOW"]


[h, if(sTipoMov != "FOLLOW"), code:{
	[macro("powers/spawnTokenBersaglio@this"): source]
	[oBersaglio = macro.return]
	[macro("utility/spawnCenterPoint@this"): oBersaglio]
	[oOrigine = macro.return]
};{
	[oOrigine = source]
}]


[h: oOtherInfo = json.get(oMacroParam, "otherInfo")]
[h, if(json.type(oOtherInfo) != "OBJECT"): oOtherInfo = "{}"]
[h: oOtherInfo = json.set(oOtherInfo, "auraMaster",source, "auraCaster", caster, "idAura", idAura)]
[h: oMacroParam = json.set(oMacroParam,"otherInfo",oOtherInfo)]


[h: switchToken(source)]
[macro("powers/registerAuraSource@this"):source]
[h: oDatiAura = json.set("","macro",nomeMacro,"param",oMacroParam,"portata",iPortata,"AOE",iAOE,"FOF",sFOF,"tipoMov",sTipoMov,"visualizza",iVisualAura,"isTransitable",bTransitable)]

[h: Aure_Attive = json.set(Aure_Attive,idAura,oDatiAura)]
[macro("powers/setAuraOrigine@this"):json.append(source,idAura,oOrigine)]

[macro("powers/updateSingleAura@this"): json.append(source,idAura)]
[h: macro.return = json.set("", "origine", oOrigine)]
