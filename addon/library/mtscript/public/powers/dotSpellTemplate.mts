[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spell")]
[h: sDanno = json.get(macro.args,"danno")]
[h: sStato = json.get(macro.args,"stato")]
[h: sCat = json.get(macro.args,"categoria")]
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->
[h: iLP = json.get(macro.args,"LP")] <!-- Opzionale -->
[h: bInizioRound = json.get(macro.args,"inizioRound")] <!-- Opzionale -->
[h: sMacroEffectName = json.get(macro.args,"macroEffectName")] <!-- Opzionale -->
[h: bBloccaTS = json.get(macro.args,"bloccaTS")] <!-- Opzionale -->
[h: sEffettoAux = json.get(macro.args,"effettoAux")] <!-- Opzionale -->
[h: bCrit = json.get(macro.args,"critRes")] <!-- Opzionale -->
[h: fPercMod = json.get(macro.args,"dmgPercMod")] <!-- Opzionale -->
[h: sLanciatore = json.get(macro.args,"lanciatore")] <!-- Opzionale -->

[h: oInputArgs = macro.args]

[h: switchToken(source)]
[h, if(!isNumber(iLL) && !isNumber(iLP)), code:{
	[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
	[macro("powers/getAutoLL@this"):args]
	[h: iLL = macro.return]
}]

[h, if(!isNumber(bCrit)): bCrit = getUltimoCritico(source)]
[h, if(sLanciatore == ""): sLanciatore = source]

[h, if(!isNumber(iLP)), code:{
	[h: param = json.set("","source",source,"target",target,"LL",iLL,"spellName",spellName)]
	[h: iLP = getLP(param)]
}]

[h, if(!isNumber(bInizioRound)): bInizioRound = 1]

[h, if(sMacroEffectName == ""): sMacroEffectName = "basicDotEffect@Lib:Poteri"]

<!-- effetto -->
[h, macro("getUltimaDifesa@Lib:Combattimento"): source]
[h: sDifesa = macro.return]

[h: oParamMacro = json.set("","danno",sDanno,"LL",iLL,"LP",iLP,"spellLib",spellName,"lanciatore", sLanciatore,"critRes", bCrit,"potenzaCritico",getPCrit(source),"effettoAux",sEffettoAux,"difesa",sDifesa)]
[h: oParamEffetto = json.set("","source",source,"tipo","macroCall","macroName",sMacroEffectName,"parametri",oParamMacro)]
[h: oParamEffetto = json.append("",oParamEffetto)]
[h: oEffetto = json.set("","target",target,"stato",sStato,"subito",bInizioRound,
	"tipo","Magia","categoria",sCat,"params",oParamEffetto,"verbose",0,"bloccaTS",bBloccaTS)]

[macro("powers/effectSpellTemplate@this"): json.set(oInputArgs,"spellName",spellName,"effetto",oEffetto)]

[h: bTSResult = json.get(macro.return, "TSResult")]
[h: sEffetto = json.get(macro.return, "effectName")]
[h, if(!bTSResult), code:{
	[if(!isNumber(fPercMod)): fPercMod = getModDmgPerc(source,target)]
	[oOtherInfo = json.set("", "percMod", fPercMod)]
	[macro("core/addOtherInfoEffetto@this"): json.append(target, sEffetto, oOtherInfo)]
}]

[macro.return = json.set(macro.return,"LL",iLL,"LP",iLP)]