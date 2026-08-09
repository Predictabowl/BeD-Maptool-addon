<!-- DA FARE -->

[h: source = json.get(macro.args,"source")]

[h: libName = "SorgenteCurativa"]
[h: switchToken(source)]

[h: sNomeMacro = buildSpellMacroName("SorgenteCurativa","auraEffect")]
[h: idAura = fetchSpellProp(libName,"nome_decorativo")]
[h: expandedAura = idAura+"-"+getName(source)]

[h: iDurata = getSpellDurata( source,libName)]
[h: iAOE = getSpellAOE(source,libName)]
[h: iPortata = getSpellRange(source,libName)]
[h: tipoBersaglio = fetchSpellProp(libName,"tipo_bersaglio")]


<!-- Calcolo potenza Incantesimo -->
[macro("combat/getUltimoCritico@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: critRes = macro.return]

[h: args = json.set("","source",source,"spellName",libName,"critRes",critRes)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): args]
[h: iLL = macro.return]
	

<!-- Parametri Aura -->
[h: paramA = json.set("","source",source,"nomeMacro",sNomeMacro,"nomeAura",idAura,"durata",iDurata,"portata",iPortata,"AOE",iAOE,"tipo","magia","potenza",iLL,"FOF",tipoBersaglio,"tipoMov","STATIC")]
[h: paramA = json.set(paramA,"updateMacro",buildSpellMacroName("SorgenteCurativa","updateRoundAura"))]




<!-- Effetti da registrare -->

[h: oMacroParam = json.set("","LL",iLL)]


<!-- mescolate il tutto -->
[h: paramA = json.set(paramA,"macroParam",oMacroParam)]
[macro("powers/effectApplyAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): paramA]