[h: source = macro.args]

[h: switchToken(source)]
[h, macro("class_skills/macros/Prontezza/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: iBonus = macro.return]
[h: VA = VA +iBonus]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("+%d VA", iBonus))]

[h: macro.return = 0]