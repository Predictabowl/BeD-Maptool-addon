[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = "BolidediGhiaccio"]

[h: elemento = getSpellElement(source,spellName)]

[h: strScuola = getScuola(source,spellName)]

[h: iDiceN = floor(getProperty("Livello",source)/5)+1]

[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: iLA = getProperty("Car_Potenza",source)+iLL]
[h: sDannoBase = strformat("%{iDiceN}d10")]

[h: combatParam = json.set("","LA",iLA,"CF",0,"PCF",0,"DannoArma",sDannoBase,"moltiplicatore",4)]
[h: dmgParam = json.set("","source",source,"target",target,"combatParam",combatParam)]
[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): dmgParam]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]

