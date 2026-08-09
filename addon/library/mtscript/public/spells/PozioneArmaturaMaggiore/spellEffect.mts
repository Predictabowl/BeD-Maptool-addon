[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: spellName = "PozioneArmaturaMaggiore"]

[h: oTemplateParam = json.set("", "source", source, "target", target, "spellName", spellName, "LDBonus", 3)]
[macro("consumables/itemTemplateWrapper@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args, "source", source, "libName", spellName, "templateMacro", "powers/armaturaEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset", "templateParam", oTemplateParam)]
