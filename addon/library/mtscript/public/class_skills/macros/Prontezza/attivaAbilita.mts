[h: source = macro.args]

[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("Prontezza","calcBonus")): source]
[h: iBonus = macro.return]
[h: VA = VA +iBonus]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "VA")]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("+%d VA", iBonus))]

[h: macro.return = 0]