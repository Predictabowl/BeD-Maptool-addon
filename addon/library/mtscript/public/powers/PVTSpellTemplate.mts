[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spell")]
[h: sPVTLL = string(json.get(macro.args,"pvtLL"))]
[h: sStato = json.get(macro.args,"stato")]<!-- Opzionale -->
[h: sCat = json.get(macro.args,"categoria")]<!-- Opzionale -->
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->
[h: sTipoEff = json.get(macro.args,"tipo")] <!-- Opzionale -->

[h, if(sTipoEff == ""): sTipoEff = "Magia"]


[h, if(!isNumber(iLL)), code:{
	[macro("powers/getAutoLL@this"): json.set("","source",source,"target",target,"spellName",spellName)]
	[h: iLL = macro.return]
}]

[macro("powers/getSpellHeal@this"): json.set("","LL",iLL,"healLL",sPVTLL,"target",target,"source",source)]
[h: iPVT = macro.return]


<!-- effetto per rimozione dell'incantesimo al termine della durata -->
[h: sMacroEffectName = "removePVTEffectTemplate@Lib:Poteri"]
[h: oParamMacro = json.set("","pvtName",spellName)]
[h: oParamEffetto = json.set("","source",source,"tipo","macroCall","macroName",sMacroEffectName,"parametri",oParamMacro)]
[h: oParamEffetto = json.append("",oParamEffetto)]
[h: oEffetto = json.set("","target",target,"stato",sStato,"subito",1,"tipo",sTipoEff,"categoria",sCat,"params",oParamEffetto,"verbose",0,"mutex",spellName)]
[macro("powers/effectSpellTemplate@this"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto,"LL",iLL)]



<!-- Applica il bonus dopo l'installazione della macro di rimozione, questo per evitare di rimuovere l'effetto subito dopo averlo applicato-->
[macro("core/modPVT@this"): json.append(target,iPVT,spellName)]

