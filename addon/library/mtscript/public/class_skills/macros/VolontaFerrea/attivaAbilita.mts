[h: source = arg(0)]

[h:sNomeAb = "VolontaFerrea"]
[h: iLiv = getLivelloAbilita(source,sNomeAb)]

[h: switchToken(source)]
[h: TS_Vol = TS_Vol + iLiv]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("%+d Tiro Salvezza Volontà", iLiv))]
[h: macro.return = 0]