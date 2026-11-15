[h: source = macro.args]

[h: switchToken(source)]
[h, if(PV > 0), code:{
    [appendMessaggio(source,"strAbilitaAttivata", "Abilità non attivabile - richiede PV 0 o negativi")]
    [return(0,1)]
}]

[h: sLibName = "Implacabile"]
[h: oEffetto = getEffetto(source, sLibName)]
[h, if(oEffetto != ""), code: {
    [appendMessaggio(source,"strAbilitaAttivata", "Abilità non attivabile - Sanguinamento ancora in corso")]
    [return(0,1)]
}]

[h, macro(buildClassSkillMacroName(sLibName,"calcBonus")): source]
[h: iBonus = macro.return]
[h: iPVMax = getPVMax(source)]
[h: iHeal = round(iPVMax*iBonus/100)]
[h: jCuraParam = json.set("","target", source, "target", source, "valore", iHeal, "verbose", 0)]
[h, macro("core/CuraTarget@this"): jCuraParam]

[h: rimuoviEffetto(source, "Atterrato")]

[h: fDotValue = iPVMax/5]

[h: sMacroEffectName = buildClassSkillMacroName(sLibName,"implacabileDotEffect")]
[h: jMacroParams = json.set("", "fDanno", fDotValue, "nome", fetchClassSkillProp(sLibName,"nome_decorativo"))]
[h: oParamEffetto = json.set("","source",source,"tipo","macroCall","macroName",sMacroEffectName,"parametri",jMacroParams)]
[h: oParamEffetto = json.append("",oParamEffetto)]
[h: oEffetto = json.set("",
    "source", source,
    "target", source,
    "effetto", sLibName,
    "stato", "Sanguinamento",
    "durata", 5,
    "subito",0,
	"tipo","NASCOSTO",
    "params",oParamEffetto,
    "verbose",0)]

[h, macro("core/ApplyEffect@this"): oEffetto]

[h: sStrCura = popMessaggio(source, "strCura")]
[h: appendMessaggio(source,"strAbilitaAttivata", strformat("%{sStrCura} - Effetto Sanguinamento applicato"))]
[h: return(0,0)]