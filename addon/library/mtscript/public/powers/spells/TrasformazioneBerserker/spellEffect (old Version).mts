[h: source = json.get(macro.args,"source")]

[h: spellName = "TrasformazioneBerserker")]

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
<!-- Aggiunge una Macro per rimuovere gli eventi -->
[h: temp = json.set("","macroName","powers/spells/TrasformazioneBerserker/removeEvent@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append(altro,temp)]
[h: param = json.set(param,"params",altro,"verbose",0)]


[h: oEffetto = param]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]


<!-- Richiede un evento On_SpellCast che blocca il lancio degli incantesimi-->
[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Spellcast","name",spellName,"macroName","powers/spells/TrasformazioneBerserker/spellCastBlock@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Spellstart","name",spellName,"macroName","powers/spells/TrasformazioneBerserker/spellCastBlock@lib:it.aldinucci.piero.bed.maptool.ruleset")]

[macro("gui/updateSchedaAttacco@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]