[h: source = arg(0)]

[h:sNomeAb = "TempraPossente"]
[h: iLiv = getLivelloAbilita(source,sNomeAb)]

[h: switchToken(source)]
[h: TS_Tem = TS_Tem + iLiv]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("%+d Tiro Salvezza Tempra", iLiv))]
[h: macro.return = 0]