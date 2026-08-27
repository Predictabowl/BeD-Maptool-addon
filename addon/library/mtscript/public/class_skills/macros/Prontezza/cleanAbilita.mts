[h: source = macro.args]

[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("Prontezza","calcBonus")): source]
[h: VA = VA -macro.return]
[h: delDaCache(source,"SpellStats")]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h:macro.return = ""]