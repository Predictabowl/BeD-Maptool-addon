[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaglioSpirituale"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d7")]

[h: return(0,"")]

<!-- Old mechanics -->
[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLA = macro.return]

[h: sBaseDmg = "7d8"]
[h: iMolt = 3]

[h: combatParam = json.set("","LA",iLA,"DannoArma",sBaseDmg,"moltiplicatore", iMolt, "tipoDanno", "B")]
[h: dmgParam = json.set("","source",source,"target",target,"combatParam",combatParam,"opportunita",0)]
[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): dmgParam]