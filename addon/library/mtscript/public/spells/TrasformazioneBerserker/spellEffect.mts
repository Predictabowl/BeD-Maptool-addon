[h: source = json.get(macro.args,"source")]

[h: spellName = "TrasformazioneBerserker"]

[h: name = fetchSpellProp("TrasformazioneBerserker","nome_decorativo")]

[h: args = json.set("","source",source,"target",source,"spellName",spellName,"critRes",0)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: iLMM = getLMM(source,spellName)]

[h: iBonusLA = 1 + iLMM]
[h: iBonusPV = 3*iLL]
[h: iBonusCD = 1]

[h: switchToken(source)]


[h: param = json.set("","target",source,"effetto",name,"stato","Potenziamento","subito",1,"tipo","Magia","mutex",fetchSpellProp(spellName,"tipo"))]

[h: temp = json.set("","key","LA","value",iBonusLA,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","CD_Base","value",iBonusCD,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","PV_Max","value",iBonusPV,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","PV","value",iBonusPV,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","key","VA","value",7,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
<!-- Aggiunge una Macro per rimuovere gli eventi -->
[h: temp = json.set("","macroName","spells/TrasformazioneBerserker/manaPenalty@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append(altro,temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]

[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[h: addSpellMod(source,"AllSpells","PM",0,0.5)]

[macro("gui/updateSchedaAttacco@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]