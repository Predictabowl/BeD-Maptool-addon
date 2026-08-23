[h: source = macro.args]

[h: switchToken(source)]
[h: iBonus = 25]
[h: Schivare = Schivare + iBonus]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("%+d Schivare",iBonus))]
[h: macro.return = 0]
