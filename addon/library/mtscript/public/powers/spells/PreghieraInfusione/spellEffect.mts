[h: source = json.get(macro.args,"source")]

[h: libName = "PreghieraInfusione"]
[h: switchToken(source)]

[h: sNomeMacro = "powers/generalEffectAura@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: idAura = fetchSpellProp(libName,"nome_decorativo")]
[h: expandedAura = idAura+"-"+getName(source)]

[h: dataRecoverParam = json.set("","source",source,"spellName",libName)]
[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): dataRecoverParam]
[h: iDurata = macro.return]
[macro("powers/getSpellAOE@lib:it.aldinucci.piero.bed.maptool.ruleset"): dataRecoverParam]
[h: iAOE = macro.return]
[h: tipoBersaglio = fetchSpellProp(libName,"tipo_AOE")]


<!-- Al momento non viene calcolata la potenza perché non serve -->
[h: paramA = json.set("","source",source,"nomeMacro",sNomeMacro,"nomeAura",idAura,"durata",iDurata,"AOE",iAOE,"tipo","magia","potenza",1,"mutex","Generatore-Preghiera","FOF",tipoBersaglio)]



<!-- Effetti da applicare -->
[h: iBonusPC = 2]
[h: iBonusC = 7]

[h: oMacroParam = json.set("","target",source,"durata",iDurata,"effetto",expandedAura,"stato","Preghiera","subito",1,"potenza",0,"tipo","Nascosto","mutex","Effetto-Preghiera")]

[h: temp = json.set("","key","PCF1","value",iBonusPC,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","PCF2","value",iBonusPC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","PCM","value",iBonusPC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","PCM2","value",iBonusPC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","CF1","value",iBonusC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","CF2","value",iBonusC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","CM","value",iBonusC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","CM2","value",iBonusC,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: oMacroParam = json.set(oMacroParam,"params",altro,"verbose",0)]

<!-- mescolate il tutto -->
[h: paramA = json.set(paramA,"macroParam",oMacroParam)]
[macro("powers/effectApplyAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): paramA]