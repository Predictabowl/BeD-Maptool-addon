[h: source = arg(0)]

[h:sNomeAb = "RiflessiFulminei"]
[h: iLiv = getLivelloAbilita(source,sNomeAb)]

[h: switchToken(source)]
[h: TS_Rif = TS_Rif + iLiv]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("%+d Tiro Salvezza Riflessi", iLiv))]
[h: macro.return = 0]