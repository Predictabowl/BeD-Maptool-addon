[h: source = json.get(macro.args,"source")]

[h: spellName = "ArmaturaMagica"]
[h: name = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/getSpellMod@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,spellName,"armatura")]
[h: iBonus = 4 + json.get(macro.return,"mod")]

[macro("powers/armaturaEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "spellName", spellName, "LDBonus", iBonus)]
