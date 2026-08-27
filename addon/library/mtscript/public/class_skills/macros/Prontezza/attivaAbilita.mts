[h: source = macro.args]

[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("Prontezza","calcBonus")): source]
[h: iBonus = macro.return]
[h: VA = VA +iBonus]
[h: delDaCache(source,"SpellStats")]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("+%d VA", iBonus))]

[h: macro.return = 0]