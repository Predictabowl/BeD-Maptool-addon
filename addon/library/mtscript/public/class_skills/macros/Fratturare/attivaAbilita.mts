[h: source = macro.args]

[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("Fratturare","calcBonus")): source]
[h: iBonus = macro.return]
[h: LA = LA + iBonus]

[h: appendMessaggio(source,"strAbilitaAttivata", strformat("+%d LA", iBonus))]
[h: macro.return = 0]
