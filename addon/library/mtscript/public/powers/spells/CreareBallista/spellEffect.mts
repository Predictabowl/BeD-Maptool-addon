[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "CreareBallista")]

[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLA = macro.return]

[h: sBaseDmg = "8d10"]
[h: iMolt = 5]

[h: oEffetto = json.set("","params","[]","verbose",0,"subito", 0)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "target", source, "source", source, "LL", iLA, "spellName",spellName,"durata",0,"effetto",oEffetto)]

[h: combatParam = json.set("","LA",iLA,"DannoArma",sBaseDmg,"moltiplicatore",iMolt)]
[h: dmgParam = json.set("","source",source,"target",target,"combatParam",combatParam,"opportunita",0)]
[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): dmgParam]

