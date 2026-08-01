[h: sOrigine = json.get(macro.args,"origine")] <!-- Punto origine Aura -->
[h: sCaster = json.get(macro.args,"caster")] <!-- se omesso usa origine -->
[h: spellName = json.get(macro.args, "spellName")]

<!--  Macro che gestisce l'effetto dell'aura -->
[h: sNomeMacro = json.get(macro.args, "auraEffectMacro")] <!-- Opzionale -->
<!-- Effetto che viene applicato dal auraEffectMacro - applicato se non si usa una custom auraEffectMacro - altrimenti diventano i parametri della macro -->
[h: oEffetto = json.get(macro.args, "effetto")]
[h: sAuraMutex = json.get(macro.args, "mutex")] <!-- Opzionale -->
[h: bStatic = json.get(macro.args, "isStatic")] <!-- Opzionale -->
[h: bUpdate = json.get(macro.args, "autoRoundUpdate")] <!-- Opzionale - se 1 Autoinserisce l'update macro standard ad ogni round -->
[h: sUpdate = json.get(macro.args, "updateMacro")] <!-- Opzionale - Se è necessario un update ad ogni round -->
[h: jUpdateParam = json.get(macro.args, "updateParam")] <!-- Opzionale -->
[h: iColore = json.get(macro.args,"colore")]
[h: bTransitable = json.get(macro.args,"isTransitable")] <!-- Opzionale, indica che può attivarsi anche solo passando -->

[h, if(sCaster == ""): sCaster = sOrigine]
[h, if(!isNumber(iColore)), code:{
	[if (isAoEHarmfulSpell(spellName)):	iColore = 1; iColore = 2]
}]

[h: idAura = getLibProperty("nome_decorativo",spellName)]
[h: idExpandedAura = idAura+"-Expanded"]


[macro("powers/getAutoLL@this"): json.append(sCaster,spellName)]
[h: iLL = macro.return]
[h: iCD = getSpellCD(sCaster,spellName)]
[h: iDurata = getSpellDurata(sCaster,spellName)]
[h: iAOE = getSpellAoE(sCaster,spellName)]
[h: sTipoBersaglio = getLibProperty("tipo_AOE",spellName)]
[h: iPortata = getSpellRange(sCaster,spellName)]

[h: oEffetto = json.set(oEffetto, "effetto", idExpandedAura, "tipo", "Nascosto", "LL", iLL, "CD", iCD)]
[h, if(json.get(oEffetto, "durata") == ""): oEffetto = json.set(oEffetto, "durata", iDurata)]

[h: paramA = json.set("","source",sOrigine,"caster",sCaster,"nomeMacro",sNomeMacro, "nomeAura", idAura,"durata",iDurata,"AOE",iAOE,"tipo","magia","potenza",iLL,"mutex",sAuraMutex,"FOF",sTipoBersaglio,"visualizza", iColore, "portata", iPortata, "isTransitable", bTransitable)]

[h, macro("powers/handleEffectSpellType@this"): json.append(sCaster,sOrigine,spellName,paramA)]
[h: paramA = macro.return]
[h, macro("powers/handleEffectSpellTags@this"): json.append(sCaster,sOrigine,spellName,paramA)]
[h: paramA = macro.return]

<!-- Round Update -->
[h, if(sUpdate != ""), code:{
	[h: jUpdateParam = json.set(jUpdateParam,"idAura",idAura)]
	[h: paramA = json.set(paramA,"updateMacro", sUpdate,"updateParam",jUpdateParam,"firstRoundUpdate",0)]
};{
	[if(bStatic == 1): sOwner = sCaster; sOwner = sOrigine]
	[if(bUpdate == 1), code :{
		[h: jUpdateParam = json.set("", "auraOwner", sOwner,"idAura",idAura)]
		[h: paramA = json.set(paramA,"updateMacro", "delayedAuraRoundUpdate@Lib:Poteri","updateParam",jUpdateParam,"firstRoundUpdate",0)]
	}]
}]

[h: paramA = json.set(paramA, "macroParam", oEffetto)]

[h, if(bStatic == 1), code:{
	[macro("powers/fixGetTokenBersaglio@this"): json.set("", "source", sCaster, "origine", sOrigine, "spellName", spellName)]
	[paramA = json.set(paramA, "tipoMov", "STATIC")]
}]


[macro("powers/effectApplyAura@this"): paramA]