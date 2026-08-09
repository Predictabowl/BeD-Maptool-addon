[h: source = json.get(macro.args,"source")]

[h: spellName = "ColtrediCenere"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h: oEffetto = json.set("","target",source,"effetto",nomeDec,"subito",1,"tipo","Magia","verbose",0)]
[h: temp = json.set("","key","Copertura","value",12,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto ,"params",altro)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",source,"spellName",spellName,"effetto",oEffetto,"bloccaTS",1)]


[macro("mechanics/getEffettoNaturale@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName,"messaggio","Sei in una zona Vulcanica od a temperatura elevata?")]
[h, if(macro.return > 0), code:{
	[h: oEffetto = json.set("","target",source,"effetto",nomeDec+"Esplosione","subito",0,"durata",1,"tipo","Nascosto","verbose",0,"messaggi",0)]
	[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("ColtrediCenere","esplosione"))]
	[h: altro = json.append("",temp)]
	[h: oEffetto = json.set(oEffetto ,"params",altro)]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffetto]
}]


[h: macro.return = ""]
