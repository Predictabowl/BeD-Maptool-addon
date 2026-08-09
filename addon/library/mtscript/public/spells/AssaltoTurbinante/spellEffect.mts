[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "AssaltoTurbinante"]
[h: sName = fetchSpellProp(spellName,"nome_decorativo")]

<!-- Effetto di rimozione -->
[h: oParamEffetto = json.set("","source",source,"tipo","macroCall","macroName","spells/AssaltoTurbinante/removeEffect@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: oParamEffetto = json.append("",oParamEffetto)]
[h: oEffetto = json.set("","effetto",sName,"subito",1,"tipo","Fisico","params",oParamEffetto,"spellName",spellName,"stato","Maestria")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",source,"spellName",spellName,"effetto",oEffetto)]

<!-- Bonus danno -->

[h: addDannoArmaAgg(source,spellName,"1d17-1","mischia")]

<!-- Attacco -->
[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]