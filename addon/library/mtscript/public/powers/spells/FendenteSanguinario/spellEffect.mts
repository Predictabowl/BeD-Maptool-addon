[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FendenteSanguinario"]
[h: sElemento = fetchSpellProp(spellName,"elemento")]
[h: sTSType = fetchSpellProp(spellName,"TS")]


[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target)]

[h: iLP = floor(getProperty("Livello",source)/3)+2]
[h: sStato = "Sanguinamento"]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato",sStato, "categoria",sStato,"LP",iLP,"inizioRound",1)]

