[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "Invisibilita"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName)]
[h: iDurata = macro.return]

[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): args]
[h: iLL = macro.return]


[h: param = json.set("","target",source,"durata",iDurata,"effetto",fluffName,"stato","Invisibile","subito",1,"potenza",iLL,"tipo","Magia")]

[h: temp = json.set("","key","Furtivita","value",12,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","macroName","spells/Invisibilita/removeEvent@lib:it.aldinucci.piero.bed.maptool.ruleset","tipo","macroCall")]
[h: altro = json.append(altro,temp)]
[h: otherInfo = json.set("","spellName",spellName)]
[h: param = json.set(param,"params",altro,"verbose",0,"otherInfo",otherInfo)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",param,"bloccaTS",1)]


[macro("powers/getCDSpell@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName)]
[h: iCD = macro.return]


<!-- Richiede un evento per quando attacca ed uno per spellcast harmful che effettua il TS-->
[h: oMacroParam = json.set("","CD",iCD)]
[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","name",spellName,"macroName","spells/Invisibilita/eventBreak@lib:it.aldinucci.piero.bed.maptool.ruleset","macroParam",oMacroParam,"event","On_Attack","token",source)]

<!-- Richiede un evento On_Attacked che aumenta il mancare del bersaglio a meno che non sia un attacco ad area (macro isAOE)-->

[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Attacked","name",spellName,"macroName","spells/Invisibilita/eventMancareAttack@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_SpellCasted","name",spellName,"macroName","spells/Invisibilita/eventMancareSpell@lib:it.aldinucci.piero.bed.maptool.ruleset")]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]