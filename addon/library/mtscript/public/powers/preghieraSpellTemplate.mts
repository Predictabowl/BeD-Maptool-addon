[h: source = json.get(macro.args,"source")]
[h: oOrigine = json.get(macro.args,"origine")]
[h: libName = json.get(macro.args,"spellName")]
[h: oEffetti = json.get(macro.args,"effetti")]
[h: sNomeMacro = json.get(macro.args,"macroAuraEffect")]


[h, if(oOrigine == ""): oOrigine = source]
[h, if(sNomeMacro == ""): sNomeMacro = "powers/generalEffectAura@lib:it.aldinucci.piero.bed.maptool.ruleset"]

[h: switchToken(source)]

[h: idAura = fetchSpellProp(libName,"nome_decorativo")]
[h: expandedAura = idAura+"-"+getName(source)]

[h: iDurata = getSpellDurata(source,libName)]
[h: iAOE = getSpellAoE(source,libName)]

[h: sTipoBersaglio = fetchSpellProp(libName,"tipo_AOE")]


<!-- Al momento non viene calcolata la potenza perché non serve -->
[h: paramA = json.set("","source",oOrigine,"nomeMacro",sNomeMacro,"nomeAura",idAura,"durata",iDurata,"AOE",iAOE,"tipo","magia",
	"potenza",1,"mutex","Generatore-Preghiera","FOF",sTipoBersaglio,"visualizza",2)]


<!-- Effetti da applicare -->

[h: oMacroParam = json.set("","target",oOrigine,"durata",iDurata,"effetto",expandedAura,"stato","Preghiera","subito",1,"potenza",0,"tipo","Nascosto","mutex","Effetto-Preghiera")]
[h: oMacroParam = json.set(oMacroParam,"params",oEffetti,"verbose",0)]

<!-- mescolate il tutto -->
[h: paramA = json.set(paramA,"macroParam",oMacroParam)]
[macro("powers/effectApplyAura@this"): paramA]