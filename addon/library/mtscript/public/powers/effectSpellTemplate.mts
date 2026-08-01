[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: oEffetto  = json.get(macro.args,"effetto")] <!-- Autoriempie: source, target, nome, durata, LL-->
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->
[h: spellDur = json.get(macro.args,"durata")] <!-- Opzionale -->
[h: bTSBlock = json.get(macro.args,"bloccaTS")] <!-- Opzionale -->
[h: iCD = json.get(macro.args,"CD")] <!-- Opzionale -->
[h: iRR = json.get(macro.args,"RR")] <!-- Opzionale -->
[h: sEffectName = json.get(macro.args,"idEffetto")] <!-- Opzionale/Override -->
[h: bDisableAutoConfig = json.get(macro.args,"disableAutoConfig")] <!-- Opzionale/Override  -->


[h, if(bTSBlock == ""): bTSBlock = 0]

[h: switchToken(source)]
[h: sSpellTags = getLibProperty("tags",spellName)]
[h: sFluffName = getLibProperty("nome_decorativo",spellName)]

[h, if(!isNumber(iRR)): iRR = getSpellRRValue(source, spellName)]

<!-- Riempie i campi di effetto vuoti -->
[h, if(sEffectName == ""): sEffectName = json.get(oEffetto,"effetto")]

[h, if(sEffectName == ""), code:{
	[sEffectName = sFluffName]
	[sTipo = upper(getLibProperty("tipo", spellName))]
	[if(sTipo == "OFFENSIVO"): sEffectName = strformat("%{sEffectName}(%s)",getName(source))]
}]
[h: sEffectTarget = json.get(oEffetto,"target")]
[h, if(sEffectTarget == ""): oEffetto = json.set(oEffetto,"target",target)]
[h: sEffectSource = json.get(oEffetto,"source")]
[h, if(sEffectSource== ""): oEffetto = json.set(oEffetto,"source",source)]

[macro("getUltimoCritico@Lib:combattimento"): source]
[h: critRes = macro.return]

[h, if(spellDur == ""): spellDur = getSpellDurata(source,spellName)]

[h, if(iLL == ""), code:{
	[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
	[macro("powers/getAutoLL@this"):args]
	[h: iLL = macro.return]
}]

[h, if(bTSBlock), code:{
	[sTSType = "NO"]
};{
	[h: sTSType = upper(getLibProperty("TS",spellName))]
}]

[if (!isNumber(iCD)): iCD = getSpellCD(json.set("","source",source,"target",target,"spellName",spellName,"critRes",critRes))]


[h, if(sTSType != "NO"), code:{
	[param = json.set("","target",target,"source",source,"spellToken",spellName,"critRes",critRes,"CD",iCD)]
	[macro("powers/getSpellTSResult@this"):param]	
	[TSResult = macro.return]
};{
	[TSResult = 0]
}]

[h, if(bDisableAutoConfig != 1), code: {
	[h, macro("powers/handleEffectSpellType@this"): json.append(source,target,spellName,oEffetto)]
	[h: oEffetto = macro.return]
	[h, macro("powers/handleEffectSpellTags@this"): json.append(source,target,spellName,oEffetto)]
	[h: oEffetto = macro.return]
}]

[h: iMolt = json.get(oEffetto,"moltiplicatore")]
[h, if(!isNumber(iMolt)): iMolt = 1]
[h: iCritFailTS = getStatModifier(target,"CriticalFailTS")]
[h: iMolt = iMolt + iCritFailTS + getStatModifier(target,"ModMoltLE")]
[h: oEffetto = json.set(oEffetto,"moltiplicatore",iMolt)]

[h: jReturn = json.set("","LL",iLL,"durata",spellDur,"TSResult",TSResult, "effectName", sEffectName, "moltiplicatore", iMolt, "critRes", critRes, "CD", iCD)]
[h, if(TSResult): return(0, jReturn)]

[h: oOtherInfo = json.get(oEffetto,"otherInfo")]
[h: oOtherInfo = json.set(oOtherInfo,"spellName",spellName,"LL",iLL,"CD",iCD,"origine",source,"critRes",critRes, "critFailTS", iCritFailTS)]
[oEffetto = json.set(oEffetto,"effetto",sEffectName,"potenza",iLL,"durata",spellDur,"verbose",0,"otherInfo",oOtherInfo, "RR", iRR)]
[h, macro("core/addFieldsToMacroCalls@this"): json.append(oEffetto, json.set("", "parentEffect", sEffectName))]
[h: oEffetto = macro.return]

[macro("core/ApplyEffect@this"):oEffetto]
[h: macro.return = jReturn]


