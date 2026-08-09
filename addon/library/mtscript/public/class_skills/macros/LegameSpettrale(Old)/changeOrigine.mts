<!-- DEPRECATED -->
[h: source = json.get(macro.args,"source")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(eventParam,"spellName")]
[h: sNomeAb = "LegameSpettrale(Old)"]

[h: iRange = getSpellRange(source,spellName)]
[h, if(iRange > 5): return(0,"")]

[h: sFluffName = fetchClassSkillProp(sNomeAb,"nome_decorativo")]
[h: abImg = fetchClassSkillImage(sNomeAb)]
[h: sMsg= strformat("<img src='%s' width='25' height='25'/> %s",abImg,sFluffName)]

[macro("powers/getOrigineAlt@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: origine = macro.return]

[h: iDistance = getDistance(source,0,origine)]

[h, if(iDistance > 20): return(0,strformat("%{sMsg}: %s è fuori portata",getName(origine)))]

[h: addSpellStartData(source,"origineAlternativa",1)]

[h: sMsg= strformat("%{sMsg}: si attiva su %s",getName(origine))]
[h: macro.return = sMsg]