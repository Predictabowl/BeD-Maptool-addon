[h: source = macro.args]

[h: switchToken(source)]
[h, macro("class_skills/macros/Fratturare/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: iBonus = macro.return]
[h: LA = LA + iBonus]

[h: appendMessaggio(source,"strAbilitaAttivata", strformat("+%d LA", iBonus))]
[h: macro.return = 0]
