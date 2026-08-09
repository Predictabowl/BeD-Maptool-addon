[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ArmaElementaleGelo"]

[h: sName = fetchSpellProp("ArmaElementaleGelo","nome_decorativo")]

[h: args = json.set("","source",source,"target",source,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: iNumHits = 8]
[h: iDamage = "1"]


[h: oEffetto = json.set("","target",target,"effetto",sName,"mutex","Incantesimo Arma Elementale","stato","Potenziamento","tipo","Magia","LL",iLL)]
[h: macroParam = json.set("","lanciatore",source,"spellName",spellName)]
[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("ArmaElementaleGelo","removeEvent"),"parametri",macroParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]




<!-- Richiede un evento On_SpellCast che blocca il lancio degli incantesimi-->
[h: eventParam = json.set("","LL",iLL,"numHits",iNumHits,"damage",iDamage,"spellName",spellName)]
[h: eventInstaller(target,"On_Hit","Incantesimo Arma Elementale",buildSpellMacroName("ArmaElementaleGelo","armaElementaleHit"),eventParam)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]