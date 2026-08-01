[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spell")]
[h, if(spellName == ""): spellName = json.get(macro.args,"spellName")] <!-- Nome alternativo -->
[h: sDanno = json.get(macro.args,"curaLL")]
[h, if(sDanno == ""): sDanno = json.get(macro.args,"danno")] <!-- Nome alternativo -->
[h: sCat = json.get(macro.args,"categoria")]
[h: sStato = json.get(macro.args,"stato")] <!-- Opzionale -->
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->
[h: bInizioRound = json.get(macro.args,"inizioRound")] <!-- Opzionale -->
[h: sMacroEffectName = json.get(macro.args,"macroEffectName")] <!-- Opzionale -->
[h: bBloccaTS = json.get(macro.args,"bloccaTS")] <!-- Opzionale -->
[h: sEffettoAux = json.get(macro.args,"effettoAux")] <!-- Opzionale -->
[h: lBlockStatus = json.get(macro.args,"blockingStatuses")] <!-- Opzionale -->

[h: switchToken(source)]
[h, if(!isNumber(iLL)), code:{
	[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
	[macro("powers/getAutoLL@this"):args]
	[h: iLL = macro.return]
}]

[h, if(sStato == ""): sStato = "Rigenerazione"]

[h, if(!isNumber(bInizioRound)): bInizioRound = 1]

[h: fPercMod = getModHealPerc(source,target)]
[h, if(sMacroEffectName == ""): sMacroEffectName = "powers/basicHotEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"]

<!-- effetto -->

[h: oParamMacro = json.set("","danno",sDanno,"LL",iLL,"spellLib",spellName,"lanciatore",source,"critRes",getUltimoCritico(source),"potenzaCritico",getPCrit(source),"effettoAux",sEffettoAux,"percMod",fPercMod, "blockingStatuses", lBlockStatus)]
[h: oParamEffetto = json.set("","source",source,"tipo","macroCall","macroName",sMacroEffectName,"parametri",oParamMacro)]
[h: oParamEffetto = json.append("",oParamEffetto)]
[h: oEffetto = json.set("","target",target,"stato",sStato,"subito",bInizioRound,
	"tipo","Magia","categoria",sCat,"params",oParamEffetto,"verbose",0,"bloccaTS",bBloccaTS)]

[macro("powers/effectSpellTemplate@this"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]